import { LightningElement, track } from 'lwc';
import { shopItems } from './itemData';

export default class Shop extends LightningElement {
    cartTotal = 0;

    @track
    storeItems = [...shopItems];

    // Subset of selected items in storeItems
    @track
    cartItems = [];

    handleShopSelect(event) {
        let storeIndex = event.target.dataset.index;
        let item = this.storeItems[storeIndex];

        if (!item.selected) {
            this.addToCart(item);
        } else {
            this.removeFromCart(item);
        }
    }

    handleChangeQuantity(event) {
        let cartIndex = event.target.dataset.index;
        let item = this.cartItems[cartIndex];

        let newQuantity = event.detail;
        item.quantity = (newQuantity < 0) ? 0 : newQuantity;

        this.updateTotal();
    }

    addToCart(item) {
        // NOTE: item.selected and item.quantity begin as undefined
        item.selected = true;
        item.quantity = 1;
        this.cartItems.push(item);

        this.updateTotal();
    }

    removeFromCart(item) {
        item.selected = false;
        this.cartItems = this.cartItems.filter( obj =>
            obj.name !== item.name
        );

        this.updateTotal();
    }

    updateTotal() {
        this.cartTotal = this.cartItems.reduce(
            (total, obj) => {
                return total + (obj.price * obj.quantity);
            }, 0
        ).toFixed(2); // Round to 2 decimals
    }

    // SORT BUTTONS
    sortName() {
        this.sortCartByKey("name");
    }
    sortQuantity() {
        this.sortCartByKey("quantity");
    }
    sortSubtotal() {
        this.sortCartByKey("subtotal");
    }
    
    sortCartByKey(key) {
        let transform = (value) => {
            switch (key) {
                case "name": return value.name;
                case "quantity": return value.quantity;
                case "subtotal": return (value.price * value.quantity);
                default:
                    console.log("Error: invalid sort key...");
                    return 0;
            }
        };

        // Sort cart by transformed values...
        this.cartItems.sort((left, right) => {
            let l = transform(left);
            let r = transform(right);
            return (l === r) ?
                0 : (l < r) ? -1 : 1 ;
        });
    }
}
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

        console.log("HANDLE SELECTED " + item.name);

        if (!item.selected) {
            this.addToCart(item);
        } else {
            this.removeFromCart(item);
        }
    }
    // selectFromShop(event) {
    //     let target = event.currentTarget;
    //     let storeIndex = target.dataset.index;

    //     target.classList.toggle("selected");
    //     let item = this.storeItems[storeIndex];
    //     if (!item.selected) {
    //         this.addToCart(item);
    //     } else {
    //         this.removeFromCart(item);
    //     }
    // }

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

    changeQuantity(event) {
        let target = event.currentTarget;
        let cartIndex = target.dataset.index;

        let item = this.cartItems[cartIndex];
        item.quantity = target.value; // HTML input floors at zero!

        this.updateTotal();
    }

    // SORT BUTTONS
    sortName() {
        this.cartItems.sort((a, b) => {
            return (a.name === b.name) ?
                0 : (a.name < b.name) ? -1 : 1 ;
        });
    }
    sortQuantity() {
        this.cartItems.sort((a, b) => {
            return (a.quantity === b.quantity) ?
                0 : (a.quantity < b.quantity) ? -1 : 1 ;
        });
    }
    sortSubtotal() {
        this.cartItems.sort((a, b) => {
            return (a.quantity*a.price === b.quantity*b.price) ?
                0 : (a.quantity*a.price < b.quantity*b.price) ? -1 : 1 ;
        });
    }
}
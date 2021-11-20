import { LightningElement, track } from 'lwc';
import { shopItems } from './itemData';

export default class Shop extends LightningElement {
    cartTotal = 0;

    @track
    storeItems = [...shopItems];

    // Subset of selected items in storeItems
    @track
    cartItems = [];

    selectFromShop(event) {
        let target = event.currentTarget;
        let storeIndex = target.dataset.index;

        target.classList.toggle("selected");
        let item = this.storeItems[storeIndex];
        if (!item.selected) {
            this.addToCart(item);
        } else {
            this.removeFromCart(item);
        }
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

    changeQuantity(event) {
        let target = event.currentTarget;
        let cartIndex = target.dataset.index;

        let item = this.cartItems[cartIndex];
        item.quantity = target.value; // HTML input floors at zero!

        this.updateTotal();
    }
}
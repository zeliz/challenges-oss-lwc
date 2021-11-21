import { LightningElement, api } from 'lwc';

export default class Item extends LightningElement {
    // Parent gets index at event.target.dataset.index;
    //(data-index={index} listed in child attribute)

    @api
    checkout = false; // distinguish between shop and cart items

    @api
    itemName;

    @api
    itemPrice;

    @api
    itemQuantity;

    @api
    itemImage;

    get cssClass() {
        return (this.checkout) ? "item cart" : "item shop";
    }

    selectShopItem() {
        if (!this.checkout) {
            this.template.querySelector(".item").classList.toggle("selected");
        }
        this.dispatchEvent(new CustomEvent('shopselect', { bubbles: true }));
    }

    changeCheckoutQuantity(event) {
        this.dispatchEvent(new CustomEvent('changequantity', {
            detail: event.target.value,  // HTML input floors at zero!
            bubbles: true
        }));
    }
}
import { LightningElement, api } from 'lwc';

export default class Item extends LightningElement {
    // Parent calls index from event.target.dataset.index;
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

    selectShopItem() {
        this.template.querySelector(".item").classList.toggle("selected");
        this.dispatchEvent(new CustomEvent('shopselect', { bubbles: true }));
    }

}
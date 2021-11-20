import { LightningElement, track } from 'lwc';
import { shopItems } from './itemData';

export default class Shop extends LightningElement {
    cartTotal = 0;

    @track
    storeItems = [...shopItems];

    // Subset of selected items in storeItems
    @track
    cartItems = [];
}
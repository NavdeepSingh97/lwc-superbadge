import { LightningElement, track } from 'lwc';

export default class BoatSearchLwc extends LightningElement {
    @track boatTypeId = '';

    handleTypeSelect(event) {
        this.boatTypeId = event.detail;
    }

}
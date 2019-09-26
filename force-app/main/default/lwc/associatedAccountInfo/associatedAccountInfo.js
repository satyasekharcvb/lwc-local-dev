/*
 * File Name: associatedAccountInfo.js
 * Project: associatedAccountInfo
 * Created Date: Thursday September 26th 2019
 * Author: ssekhar, Santanu Pal
 * Description: LWC Component which gets editable account information to edit the Hospital Info
 */
import { LightningElement, track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners} from 'c/pubsub';

export default class AssociatedAccountInfo extends LightningElement {

    @track accountId;
    @wire(CurrentPageReference) pageRef;

    //life cycle hook in which we can subscribe for an event
    connectedCallback() {
        // subscribe to searchKeyChange event
        registerListener('showAccount', this.handleAccountInfo, this);
    }

    //life cycle hook in which we can unsubscribe all events
    disconnectedCallback() {
        // unsubscribe from showAccount event
        unregisterAllListeners(this);
    }

    //handler for the event
    handleAccountInfo(accountRecord) {
        this.accountId = accountRecord.Id;
    }
}
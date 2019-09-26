/*
 * File Name: showCases.js
 * Project: showCases
 * Created Date: Thursday September 26th 2019
 * Author: ssekhar, Santanu Pal
 * Description: LWC Component to show the list of cases
 */
import { LightningElement, track,wire } from 'lwc';
import getCases from '@salesforce/apex/ShowCasesController.getCases';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';


//Actions to be available in  the case rows
const actions = [
    { label: 'Show Account details', name: 'show_account_details' },
    
];

//List of columns in the data table
const columns = [
    { label: 'Case Number', fieldName: 'CaseNumber' },
    { label: 'Status', fieldName: 'Status',  },
    { label: 'Subject', fieldName: 'Subject',  },
    { label: 'Created Date', fieldName: 'CreatedDate', type: 'date' },
    {
        type: 'action',
        typeAttributes: { rowActions: actions },
    },
];

//LWC Class for the c-show-cases component
export default class ShowCases extends LightningElement {
   
    @track columns = columns;

    @wire(CurrentPageReference) pageRef;

    @wire(getCases)
    cases;

    
    //On row action method which should handle the event
    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        switch (actionName) {
            case 'show_account_details':
                this.showRowDetails(row);
                break;
            default:
        }
    }

    

    //Method that fires the showAccount event
    showRowDetails(row) {

        const accountRecord ={
            "Id": row.AccountId,
            "Name":row.Account.Name,
            "Street": row.Account.BillingStreet, 
            "City": row.Account.BillingCity, 
            "State": row.Account.BillingState, 
        };

        fireEvent(this.pageRef, 'showAccount', accountRecord);
    }
}

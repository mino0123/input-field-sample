import { LightningElement, api } from 'lwc';

export default class MyFieldLwc extends LightningElement {
    @api fieldName = 'Name';
}

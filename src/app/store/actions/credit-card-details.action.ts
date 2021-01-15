import { Action } from '@ngrx/store';

export const CREDIT_CARD_PAYMENT_DETAILS = '[CreditCardDetails] Credit Card Details for Payment';

export class CreditCardPaymentDetails implements Action {
    readonly type = CREDIT_CARD_PAYMENT_DETAILS;
    constructor(public payload: any){}
}

export type CreditCardDetailsAction = CreditCardPaymentDetails ;

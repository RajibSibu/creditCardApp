import { CreditCardDetails } from './../../model/credit-card-detail';

export interface CreditCardPaymentDetails {
    creditCardData: CreditCardDetails;
}
export const initialCreditCardDetails: CreditCardPaymentDetails = {
    creditCardData: null

};
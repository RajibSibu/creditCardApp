import { CreditCardPaymentDetails, initialCreditCardDetails} from './credit-card-details.state';

export interface AppState {
    creditCardData: CreditCardPaymentDetails ;
}

export const initialAppState: AppState = {
    creditCardData: initialCreditCardDetails
};
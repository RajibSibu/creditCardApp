import { initialCreditCardDetails } from './../state/credit-card-details.state';
import * as alias from '../actions/credit-card-details.action';
export const initialiState = {
    initialCreditCardDetails
};

export function creditCardReducer(state = initialiState.initialCreditCardDetails , action: alias.CreditCardDetailsAction) {
    switch (action.type) {

        case alias.CREDIT_CARD_PAYMENT_DETAILS: {
            return {
                ...state,
                creditCardData: action.payload
            };
        }

        default:
            return state;
    }
}
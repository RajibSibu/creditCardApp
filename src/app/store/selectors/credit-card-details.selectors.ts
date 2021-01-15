import { AppState } from './../state/app.state';
import { createSelector } from '@ngrx/store';
import { CreditCardPaymentDetails } from './../state/credit-card-details.state';

const creditCardDetailsState = (state: AppState) => state.creditCardData;

export const selectorCreditCard = createSelector(
    creditCardDetailsState,
    (state: CreditCardPaymentDetails) => state.creditCardData
);

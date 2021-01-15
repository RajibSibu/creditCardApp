import { CreditCardDetailsService } from './../../services/credit-card-details.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as alias from '../actions/credit-card-details.action';
@Injectable()
export class CreditCardDetailsEffect {
    constructor(private action$: Actions,
        private creditCardService: CreditCardDetailsService) { }
    @Effect()
    creditCardPaymentEffect$ = this.action$.pipe(
        ofType<alias.CreditCardPaymentDetails>(alias.CREDIT_CARD_PAYMENT_DETAILS),
        switchMap(req => this.creditCardService.submitPaymentDetails(req.payload)
            .pipe(
                map(response => new alias.CreditCardPaymentDetails(response))
            ))
    );
}
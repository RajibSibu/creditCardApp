import { ActionReducerMap } from '@ngrx/store';
import { AppState} from './../state/app.state';
import { creditCardReducer} from './credit-card.reducer';

export const appReducer: ActionReducerMap<AppState, any> = {
    creditCardData: creditCardReducer
};
import { AppState } from './store/state/app.state';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectorCreditCard } from './store/selectors/credit-card-details.selectors';
import { CreditCardDetails } from './model/credit-card-detail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'creditcardApp';
  message: string;
  userData: CreditCardDetails;
  constructor(private store: Store<AppState>,
    private router: Router) { 
  }
  checkMessageDisplay() {
     this.store.pipe(select(selectorCreditCard)).subscribe(data => {
      this.userData = data;
      this.message = 'Hello ' + (this.userData && this.userData.cardHolderName ? this.userData.cardHolderName : '') + 'Your Payment is Completed';
    });
    return this.userData && this.userData.cardHolderName && this.router.url.includes('mainPage')? true : false;
  }
  checkButtonVisiable() {
    return (this.userData && this.userData.cardHolderName && this.userData != null) || this.router.url.includes('payment') ? true : false;
  }
} 

import { AppState } from './../store/state/app.state';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CreditCardPaymentDetails } from '../store/actions/credit-card-details.action';
@Component({
  selector: 'app-creditcard-paymet',
  templateUrl: './creditcard-paymet.component.html',
  styleUrls: ['./creditcard-paymet.component.css']
})
export class CreditcardPaymetComponent implements OnInit {

  loginForm: any;
  loading = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppState>) {
    this.loginForm = this.formBuilder.group({
      creditCardNum: ['', [
        Validators.required,
      ]],
      cardHolderName: ['', [
        Validators.required
      ]],
      expireDate: [ , [
        Validators.required,
      ]],
      cvv: ['', [
      ]],
      amount: ['', [
        Validators.required,
        Validators.min(1)
      ]],
    });
  }

  ngOnInit(): void {
  }
  onSubmit(value) {
    this.loading = true;
    setTimeout((_: any) => {
      this.loading = false;
      this.router.navigate(['/mainPage']);
      this.store.dispatch(new CreditCardPaymentDetails(value));

    }, 2000);

  }
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    return (day > new Date());
  }
}

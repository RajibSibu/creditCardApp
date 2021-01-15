import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditCardDetailsService {
  private paymentUrl = '';
  constructor(private httpClient: HttpClient) { }
  submitPaymentDetails(paymentReq: object): Observable<any> {
    return this.httpClient.post(this.paymentUrl, paymentReq);
  }
}

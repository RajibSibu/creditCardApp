import { TestBed } from '@angular/core/testing';

import { CreditCardDetailsService } from './credit-card-details.service';

describe('CreditCardDetailsService', () => {
  let service: CreditCardDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

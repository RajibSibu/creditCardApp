import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardPaymetComponent } from './creditcard-paymet.component';

describe('CreditcardPaymetComponent', () => {
  let component: CreditcardPaymetComponent;
  let fixture: ComponentFixture<CreditcardPaymetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditcardPaymetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcardPaymetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

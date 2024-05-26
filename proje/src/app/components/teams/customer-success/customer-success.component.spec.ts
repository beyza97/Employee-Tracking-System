import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSuccessComponent } from './customer-success.component';

describe('CustomerSuccessComponent', () => {
  let component: CustomerSuccessComponent;
  let fixture: ComponentFixture<CustomerSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerSuccessComponent]
    });
    fixture = TestBed.createComponent(CustomerSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityStatusComponent } from './activity-status.component';

describe('ActivityStatusComponent', () => {
  let component: ActivityStatusComponent;
  let fixture: ComponentFixture<ActivityStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityStatusComponent]
    });
    fixture = TestBed.createComponent(ActivityStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

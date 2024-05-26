import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionManageComponent } from './mission-manage.component';

describe('MissionManageComponent', () => {
  let component: MissionManageComponent;
  let fixture: ComponentFixture<MissionManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionManageComponent]
    });
    fixture = TestBed.createComponent(MissionManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

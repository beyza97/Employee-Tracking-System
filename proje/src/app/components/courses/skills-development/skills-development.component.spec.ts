import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDevelopmentComponent } from './skills-development.component';

describe('SkillsDevelopmentComponent', () => {
  let component: SkillsDevelopmentComponent;
  let fixture: ComponentFixture<SkillsDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsDevelopmentComponent]
    });
    fixture = TestBed.createComponent(SkillsDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

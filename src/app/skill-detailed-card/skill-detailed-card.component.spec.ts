import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDetailedCardComponent } from './skill-detailed-card.component';

describe('SkillDetailedCardComponent', () => {
  let component: SkillDetailedCardComponent;
  let fixture: ComponentFixture<SkillDetailedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillDetailedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillDetailedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

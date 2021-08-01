import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanForDayComponent } from './plan-for-day.component';

describe('PlanForDayComponent', () => {
  let component: PlanForDayComponent;
  let fixture: ComponentFixture<PlanForDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanForDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanForDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

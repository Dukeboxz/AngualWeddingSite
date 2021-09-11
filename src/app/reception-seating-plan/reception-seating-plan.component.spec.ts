import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionSeatingPlanComponent } from './reception-seating-plan.component';

describe('ReceptionSeatingPlanComponent', () => {
  let component: ReceptionSeatingPlanComponent;
  let fixture: ComponentFixture<ReceptionSeatingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionSeatingPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionSeatingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

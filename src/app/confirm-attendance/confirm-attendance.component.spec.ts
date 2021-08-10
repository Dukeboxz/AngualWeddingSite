import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAttendanceComponent } from './confirm-attendance.component';

describe('ConfirmAttendanceComponent', () => {
  let component: ConfirmAttendanceComponent;
  let fixture: ComponentFixture<ConfirmAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

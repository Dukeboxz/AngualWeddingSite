import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveningReceptionComponent } from './evening-reception.component';

describe('EveningReceptionComponent', () => {
  let component: EveningReceptionComponent;
  let fixture: ComponentFixture<EveningReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveningReceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveningReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

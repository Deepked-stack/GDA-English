import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationRoutesAndAdmnComponent } from './medication-routes-and-admn.component';

describe('MedicationRoutesAndAdmnComponent', () => {
  let component: MedicationRoutesAndAdmnComponent;
  let fixture: ComponentFixture<MedicationRoutesAndAdmnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicationRoutesAndAdmnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicationRoutesAndAdmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

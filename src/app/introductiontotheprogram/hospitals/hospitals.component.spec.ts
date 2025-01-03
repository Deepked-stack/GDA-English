import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsComponent } from './hospitals.component';

describe('HospitalsComponent', () => {
  let component: HospitalsComponent;
  let fixture: ComponentFixture<HospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospitalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

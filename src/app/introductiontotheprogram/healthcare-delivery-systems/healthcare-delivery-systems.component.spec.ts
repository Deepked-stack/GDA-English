import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareDeliverySystemsComponent } from './healthcare-delivery-systems.component';

describe('HealthcareDeliverySystemsComponent', () => {
  let component: HealthcareDeliverySystemsComponent;
  let fixture: ComponentFixture<HealthcareDeliverySystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthcareDeliverySystemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthcareDeliverySystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

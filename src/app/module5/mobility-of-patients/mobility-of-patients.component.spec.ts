import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilityOfPatientsComponent } from './mobility-of-patients.component';

describe('MobilityOfPatientsComponent', () => {
  let component: MobilityOfPatientsComponent;
  let fixture: ComponentFixture<MobilityOfPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobilityOfPatientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilityOfPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

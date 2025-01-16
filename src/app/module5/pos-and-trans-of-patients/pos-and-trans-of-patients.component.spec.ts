import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosAndTransOfPatientsComponent } from './pos-and-trans-of-patients.component';

describe('PosAndTransOfPatientsComponent', () => {
  let component: PosAndTransOfPatientsComponent;
  let fixture: ComponentFixture<PosAndTransOfPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PosAndTransOfPatientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosAndTransOfPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

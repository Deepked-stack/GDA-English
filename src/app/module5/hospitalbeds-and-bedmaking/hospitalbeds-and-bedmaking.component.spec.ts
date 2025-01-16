import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalbedsAndBedmakingComponent } from './hospitalbeds-and-bedmaking.component';

describe('HospitalbedsAndBedmakingComponent', () => {
  let component: HospitalbedsAndBedmakingComponent;
  let fixture: ComponentFixture<HospitalbedsAndBedmakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospitalbedsAndBedmakingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalbedsAndBedmakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

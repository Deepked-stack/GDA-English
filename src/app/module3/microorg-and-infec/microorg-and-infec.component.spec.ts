import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroorgAndInfecComponent } from './microorg-and-infec.component';

describe('MicroorgAndInfecComponent', () => {
  let component: MicroorgAndInfecComponent;
  let fixture: ComponentFixture<MicroorgAndInfecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MicroorgAndInfecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroorgAndInfecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

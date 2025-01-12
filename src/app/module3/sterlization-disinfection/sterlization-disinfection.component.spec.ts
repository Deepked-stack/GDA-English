import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterlizationDisinfectionComponent } from './sterlization-disinfection.component';

describe('SterlizationDisinfectionComponent', () => {
  let component: SterlizationDisinfectionComponent;
  let fixture: ComponentFixture<SterlizationDisinfectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SterlizationDisinfectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SterlizationDisinfectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

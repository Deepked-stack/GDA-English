import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthAndIllHealthComponent } from './health-and-ill-health.component';

describe('HealthAndIllHealthComponent', () => {
  let component: HealthAndIllHealthComponent;
  let fixture: ComponentFixture<HealthAndIllHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthAndIllHealthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthAndIllHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectiveCommunicationComponent } from './effective-communication.component';

describe('EffectiveCommunicationComponent', () => {
  let component: EffectiveCommunicationComponent;
  let fixture: ComponentFixture<EffectiveCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EffectiveCommunicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectiveCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatomyAndPhysioComponent } from './anatomy-and-physio.component';

describe('AnatomyAndPhysioComponent', () => {
  let component: AnatomyAndPhysioComponent;
  let fixture: ComponentFixture<AnatomyAndPhysioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnatomyAndPhysioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnatomyAndPhysioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

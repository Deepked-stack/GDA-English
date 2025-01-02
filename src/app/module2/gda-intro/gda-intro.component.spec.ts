import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GDAIntroComponent } from './gda-intro.component';

describe('GDAIntroComponent', () => {
  let component: GDAIntroComponent;
  let fixture: ComponentFixture<GDAIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GDAIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GDAIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

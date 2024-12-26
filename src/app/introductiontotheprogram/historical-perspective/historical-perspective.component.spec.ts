import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalPerspectiveComponent } from './historical-perspective.component';

describe('HistoricalPerspectiveComponent', () => {
  let component: HistoricalPerspectiveComponent;
  let fixture: ComponentFixture<HistoricalPerspectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricalPerspectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalPerspectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

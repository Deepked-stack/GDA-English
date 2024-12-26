import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyNavComponent } from './study-nav.component';

describe('StudyNavComponent', () => {
  let component: StudyNavComponent;
  let fixture: ComponentFixture<StudyNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

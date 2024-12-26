import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnItComponent } from './learn-it.component';

describe('LearnItComponent', () => {
  let component: LearnItComponent;
  let fixture: ComponentFixture<LearnItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnItComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

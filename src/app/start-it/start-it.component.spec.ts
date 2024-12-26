import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartItComponent } from './start-it.component';

describe('StartItComponent', () => {
  let component: StartItComponent;
  let fixture: ComponentFixture<StartItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartItComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTerminologiesComponent } from './basic-terminologies.component';

describe('BasicTerminologiesComponent', () => {
  let component: BasicTerminologiesComponent;
  let fixture: ComponentFixture<BasicTerminologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicTerminologiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicTerminologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

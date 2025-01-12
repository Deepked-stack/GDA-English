import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHygeineAndInfecControlComponent } from './basic-hygeine-and-infec-control.component';

describe('BasicHygeineAndInfecControlComponent', () => {
  let component: BasicHygeineAndInfecControlComponent;
  let fixture: ComponentFixture<BasicHygeineAndInfecControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicHygeineAndInfecControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicHygeineAndInfecControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

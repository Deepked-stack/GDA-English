import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsepticWorkComponent } from './aseptic-work.component';

describe('AsepticWorkComponent', () => {
  let component: AsepticWorkComponent;
  let fixture: ComponentFixture<AsepticWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsepticWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsepticWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincontentnavComponent } from './maincontentnav.component';

describe('MaincontentnavComponent', () => {
  let component: MaincontentnavComponent;
  let fixture: ComponentFixture<MaincontentnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaincontentnavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaincontentnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

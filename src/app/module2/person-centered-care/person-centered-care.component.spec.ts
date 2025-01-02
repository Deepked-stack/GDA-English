import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCenteredCareComponent } from './person-centered-care.component';

describe('PersonCenteredCareComponent', () => {
  let component: PersonCenteredCareComponent;
  let fixture: ComponentFixture<PersonCenteredCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonCenteredCareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonCenteredCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiomedicalWasteMgmntComponent } from './biomedical-waste-mgmnt.component';

describe('BiomedicalWasteMgmntComponent', () => {
  let component: BiomedicalWasteMgmntComponent;
  let fixture: ComponentFixture<BiomedicalWasteMgmntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiomedicalWasteMgmntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiomedicalWasteMgmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

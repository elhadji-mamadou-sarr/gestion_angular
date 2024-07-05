import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouertFormateurComponent } from './ajouert-formateur.component';

describe('AjouertFormateurComponent', () => {
  let component: AjouertFormateurComponent;
  let fixture: ComponentFixture<AjouertFormateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouertFormateurComponent]
    });
    fixture = TestBed.createComponent(AjouertFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

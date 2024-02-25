import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreaBarcoComponentComponent } from './form-crea-barco-component.component';

describe('FormCreaBarcoComponentComponent', () => {
  let component: FormCreaBarcoComponentComponent;
  let fixture: ComponentFixture<FormCreaBarcoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreaBarcoComponentComponent]
    });
    fixture = TestBed.createComponent(FormCreaBarcoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreaPersonaComponent } from './form-crea-persona.component';

describe('FormCreaPersonaComponent', () => {
  let component: FormCreaPersonaComponent;
  let fixture: ComponentFixture<FormCreaPersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreaPersonaComponent]
    });
    fixture = TestBed.createComponent(FormCreaPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaComponentComponent } from './persona-component.component';

describe('PersonaComponentComponent', () => {
  let component: PersonaComponentComponent;
  let fixture: ComponentFixture<PersonaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaComponentComponent]
    });
    fixture = TestBed.createComponent(PersonaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

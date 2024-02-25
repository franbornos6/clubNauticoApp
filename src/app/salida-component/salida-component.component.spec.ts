import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaComponentComponent } from './salida-component.component';

describe('SalidaComponentComponent', () => {
  let component: SalidaComponentComponent;
  let fixture: ComponentFixture<SalidaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalidaComponentComponent]
    });
    fixture = TestBed.createComponent(SalidaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

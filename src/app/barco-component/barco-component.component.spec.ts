import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcoComponentComponent } from './barco-component.component';

describe('BarcoComponentComponent', () => {
  let component: BarcoComponentComponent;
  let fixture: ComponentFixture<BarcoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarcoComponentComponent]
    });
    fixture = TestBed.createComponent(BarcoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

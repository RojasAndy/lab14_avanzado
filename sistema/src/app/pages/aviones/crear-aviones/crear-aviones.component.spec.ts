import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAvionesComponent } from './crear-aviones.component';

describe('CrearAvionesComponent', () => {
  let component: CrearAvionesComponent;
  let fixture: ComponentFixture<CrearAvionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearAvionesComponent]
    });
    fixture = TestBed.createComponent(CrearAvionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

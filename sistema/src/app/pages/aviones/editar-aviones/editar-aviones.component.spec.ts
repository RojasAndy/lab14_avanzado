import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAvionesComponent } from './editar-aviones.component';

describe('EditarAvionesComponent', () => {
  let component: EditarAvionesComponent;
  let fixture: ComponentFixture<EditarAvionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAvionesComponent]
    });
    fixture = TestBed.createComponent(EditarAvionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

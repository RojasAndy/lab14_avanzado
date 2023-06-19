import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVuelosComponent } from './editar-vuelos.component';

describe('EditarVuelosComponent', () => {
  let component: EditarVuelosComponent;
  let fixture: ComponentFixture<EditarVuelosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarVuelosComponent]
    });
    fixture = TestBed.createComponent(EditarVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

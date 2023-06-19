import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTripulantesComponent } from './editar-tripulantes.component';

describe('EditarTripulantesComponent', () => {
  let component: EditarTripulantesComponent;
  let fixture: ComponentFixture<EditarTripulantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarTripulantesComponent]
    });
    fixture = TestBed.createComponent(EditarTripulantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

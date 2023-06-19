import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTripulantesComponent } from './listar-tripulantes.component';

describe('ListarTripulantesComponent', () => {
  let component: ListarTripulantesComponent;
  let fixture: ComponentFixture<ListarTripulantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarTripulantesComponent]
    });
    fixture = TestBed.createComponent(ListarTripulantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

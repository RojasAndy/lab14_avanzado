import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTripulantesComponent } from './crear-tripulantes.component';

describe('CrearTripulantesComponent', () => {
  let component: CrearTripulantesComponent;
  let fixture: ComponentFixture<CrearTripulantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearTripulantesComponent]
    });
    fixture = TestBed.createComponent(CrearTripulantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

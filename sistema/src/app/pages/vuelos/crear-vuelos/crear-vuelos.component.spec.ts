import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVuelosComponent } from './crear-vuelos.component';

describe('CrearVuelosComponent', () => {
  let component: CrearVuelosComponent;
  let fixture: ComponentFixture<CrearVuelosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearVuelosComponent]
    });
    fixture = TestBed.createComponent(CrearVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

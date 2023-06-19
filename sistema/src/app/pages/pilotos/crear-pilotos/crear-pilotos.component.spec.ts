import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPilotosComponent } from './crear-pilotos.component';

describe('CrearPilotosComponent', () => {
  let component: CrearPilotosComponent;
  let fixture: ComponentFixture<CrearPilotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPilotosComponent]
    });
    fixture = TestBed.createComponent(CrearPilotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

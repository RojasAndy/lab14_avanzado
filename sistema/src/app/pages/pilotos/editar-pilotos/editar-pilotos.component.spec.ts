import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPilotosComponent } from './editar-pilotos.component';

describe('EditarPilotosComponent', () => {
  let component: EditarPilotosComponent;
  let fixture: ComponentFixture<EditarPilotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPilotosComponent]
    });
    fixture = TestBed.createComponent(EditarPilotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

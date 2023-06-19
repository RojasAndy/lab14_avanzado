import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBasesregresosComponent } from './editar-basesregresos.component';

describe('EditarBasesregresosComponent', () => {
  let component: EditarBasesregresosComponent;
  let fixture: ComponentFixture<EditarBasesregresosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarBasesregresosComponent]
    });
    fixture = TestBed.createComponent(EditarBasesregresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

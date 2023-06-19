import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBasesregresosComponent } from './listar-basesregresos.component';

describe('ListarBasesregresosComponent', () => {
  let component: ListarBasesregresosComponent;
  let fixture: ComponentFixture<ListarBasesregresosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarBasesregresosComponent]
    });
    fixture = TestBed.createComponent(ListarBasesregresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

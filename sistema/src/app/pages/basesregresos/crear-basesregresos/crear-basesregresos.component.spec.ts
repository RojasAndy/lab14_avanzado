import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBasesregresosComponent } from './crear-basesregresos.component';

describe('CrearBasesregresosComponent', () => {
  let component: CrearBasesregresosComponent;
  let fixture: ComponentFixture<CrearBasesregresosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearBasesregresosComponent]
    });
    fixture = TestBed.createComponent(CrearBasesregresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

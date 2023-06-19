import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerVueloComponent } from './ver-vuelo.component';

describe('VerVueloComponent', () => {
  let component: VerVueloComponent;
  let fixture: ComponentFixture<VerVueloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerVueloComponent]
    });
    fixture = TestBed.createComponent(VerVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

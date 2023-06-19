import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBaseregresoComponent } from './ver-baseregreso.component';

describe('VerBaseregresoComponent', () => {
  let component: VerBaseregresoComponent;
  let fixture: ComponentFixture<VerBaseregresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerBaseregresoComponent]
    });
    fixture = TestBed.createComponent(VerBaseregresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

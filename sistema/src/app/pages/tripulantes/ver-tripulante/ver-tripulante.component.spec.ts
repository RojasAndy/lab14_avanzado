import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTripulanteComponent } from './ver-tripulante.component';

describe('VerTripulanteComponent', () => {
  let component: VerTripulanteComponent;
  let fixture: ComponentFixture<VerTripulanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerTripulanteComponent]
    });
    fixture = TestBed.createComponent(VerTripulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

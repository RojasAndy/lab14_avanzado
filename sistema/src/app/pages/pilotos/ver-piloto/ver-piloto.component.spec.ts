import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPilotoComponent } from './ver-piloto.component';

describe('VerPilotoComponent', () => {
  let component: VerPilotoComponent;
  let fixture: ComponentFixture<VerPilotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPilotoComponent]
    });
    fixture = TestBed.createComponent(VerPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

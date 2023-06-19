import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAvionComponent } from './ver-avion.component';

describe('VerAvionComponent', () => {
  let component: VerAvionComponent;
  let fixture: ComponentFixture<VerAvionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerAvionComponent]
    });
    fixture = TestBed.createComponent(VerAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProcedimientosComponent } from './gestion-procedimientos.component';

describe('GestionProcedimientosComponent', () => {
  let component: GestionProcedimientosComponent;
  let fixture: ComponentFixture<GestionProcedimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionProcedimientosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionProcedimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

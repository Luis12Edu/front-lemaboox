import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizacionPuestosComponent } from './optimizacion-puestos.component';

describe('OptimizacionPuestosComponent', () => {
  let component: OptimizacionPuestosComponent;
  let fixture: ComponentFixture<OptimizacionPuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizacionPuestosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptimizacionPuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

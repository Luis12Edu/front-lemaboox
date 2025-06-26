import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloAplicacionesComponent } from './desarrollo-aplicaciones.component';

describe('DesarrolloAplicacionesComponent', () => {
  let component: DesarrolloAplicacionesComponent;
  let fixture: ComponentFixture<DesarrolloAplicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesarrolloAplicacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesarrolloAplicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

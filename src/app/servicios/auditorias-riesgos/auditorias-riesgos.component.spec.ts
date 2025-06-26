import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriasRiesgosComponent } from './auditorias-riesgos.component';

describe('AuditoriasRiesgosComponent', () => {
  let component: AuditoriasRiesgosComponent;
  let fixture: ComponentFixture<AuditoriasRiesgosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditoriasRiesgosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuditoriasRiesgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

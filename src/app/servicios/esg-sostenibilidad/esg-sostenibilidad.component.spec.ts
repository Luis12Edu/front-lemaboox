import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsgSostenibilidadComponent } from './esg-sostenibilidad.component';

describe('EsgSostenibilidadComponent', () => {
  let component: EsgSostenibilidadComponent;
  let fixture: ComponentFixture<EsgSostenibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsgSostenibilidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EsgSostenibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

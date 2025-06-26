import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatizacionDigitalComponent } from './automatizacion-digital.component';

describe('AutomatizacionDigitalComponent', () => {
  let component: AutomatizacionDigitalComponent;
  let fixture: ComponentFixture<AutomatizacionDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomatizacionDigitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutomatizacionDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

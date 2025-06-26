import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuotasclarasComponent } from './cuotasclaras.component';

describe('CuotasclarasComponent', () => {
  let component: CuotasclarasComponent;
  let fixture: ComponentFixture<CuotasclarasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuotasclarasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuotasclarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

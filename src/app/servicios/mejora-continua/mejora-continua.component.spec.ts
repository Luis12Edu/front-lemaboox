import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejoraContinuaComponent } from './mejora-continua.component';

describe('MejoraContinuaComponent', () => {
  let component: MejoraContinuaComponent;
  let fixture: ComponentFixture<MejoraContinuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MejoraContinuaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MejoraContinuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

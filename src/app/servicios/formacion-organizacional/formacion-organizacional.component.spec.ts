import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionOrganizacionalComponent } from './formacion-organizacional.component';

describe('FormacionOrganizacionalComponent', () => {
  let component: FormacionOrganizacionalComponent;
  let fixture: ComponentFixture<FormacionOrganizacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormacionOrganizacionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormacionOrganizacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCustomizadoComponent } from './formulario-customizado.component';

describe('FormularioCustomizadoComponent', () => {
  let component: FormularioCustomizadoComponent;
  let fixture: ComponentFixture<FormularioCustomizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCustomizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCustomizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

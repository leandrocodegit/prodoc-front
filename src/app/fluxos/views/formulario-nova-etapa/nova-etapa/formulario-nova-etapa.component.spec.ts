import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNovaEtapaComponent } from './formulario-nova-etapa.component';

describe('FormularioNovaEtapaComponent', () => {
  let component: FormularioNovaEtapaComponent;
  let fixture: ComponentFixture<FormularioNovaEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNovaEtapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioNovaEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

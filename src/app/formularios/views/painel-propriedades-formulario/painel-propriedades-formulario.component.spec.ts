import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelPropriedadesFormularioComponent } from './painel-propriedades-formulario.component';

describe('PainelPropriedadesFormularioComponent', () => {
  let component: PainelPropriedadesFormularioComponent;
  let fixture: ComponentFixture<PainelPropriedadesFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PainelPropriedadesFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelPropriedadesFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelValidacaoFormularioComponent } from './painel-validacao-formulario.component';

describe('PainelValidacaoFormularioComponent', () => {
  let component: PainelValidacaoFormularioComponent;
  let fixture: ComponentFixture<PainelValidacaoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PainelValidacaoFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelValidacaoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

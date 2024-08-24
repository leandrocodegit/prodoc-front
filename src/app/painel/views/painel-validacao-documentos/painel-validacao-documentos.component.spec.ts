import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelValidacaoDocumentosComponent } from './painel-validacao-documentos.component';

describe('PainelValidacaoDocumentosComponent', () => {
  let component: PainelValidacaoDocumentosComponent;
  let fixture: ComponentFixture<PainelValidacaoDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PainelValidacaoDocumentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelValidacaoDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

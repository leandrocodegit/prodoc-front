import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelAssinaturaInternaComponent } from './painel-assinatura-interna.component';

describe('PainelAssinaturaInternaComponent', () => {
  let component: PainelAssinaturaInternaComponent;
  let fixture: ComponentFixture<PainelAssinaturaInternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PainelAssinaturaInternaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelAssinaturaInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

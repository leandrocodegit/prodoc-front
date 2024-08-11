import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoFluxoEtapasComponent } from './descricao-fluxo-etapas.component';

describe('DescricaoFluxoEtapasComponent', () => {
  let component: DescricaoFluxoEtapasComponent;
  let fixture: ComponentFixture<DescricaoFluxoEtapasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescricaoFluxoEtapasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescricaoFluxoEtapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

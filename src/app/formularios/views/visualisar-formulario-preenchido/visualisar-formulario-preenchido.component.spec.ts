import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisarFormularioPreenchidoComponent } from './visualisar-formulario-preenchido.component';

describe('VisualisarFormularioPreenchidoComponent', () => {
  let component: VisualisarFormularioPreenchidoComponent;
  let fixture: ComponentFixture<VisualisarFormularioPreenchidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualisarFormularioPreenchidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualisarFormularioPreenchidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

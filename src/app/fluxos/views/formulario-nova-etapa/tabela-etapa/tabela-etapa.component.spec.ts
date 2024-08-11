import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaEtapaComponent } from './tabela-etapa.component';

describe('TabelaEtapaComponent', () => {
  let component: TabelaEtapaComponent;
  let fixture: ComponentFixture<TabelaEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaEtapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

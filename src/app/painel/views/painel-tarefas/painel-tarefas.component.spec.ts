import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelTarefasComponent } from './painel-tarefas.component';

describe('PainelTarefasComponent', () => {
  let component: PainelTarefasComponent;
  let fixture: ComponentFixture<PainelTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PainelTarefasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { FormularioNovaEtapaComponent } from 'src/app/formulario-nova-etapa/formulario-nova-etapa.component';
import { Etapa } from 'src/app/model/Etapa.model';

@Component({
  selector: 'app-criar-fluxo',
  templateUrl: './criar-fluxo.component.html',
  styleUrls: ['./criar-fluxo.component.css']
})
export class CriarsFluxoComponent implements OnInit {

  protected etapas: Etapa[] = [];
  protected etapaSelect: Etapa = new Etapa();

  constructor(
    private dialog: MatDialog
  ) { }

  todo = [
    { value: 'I can be dragged', disabled: false },
    { value: 'I cannot be dragged', disabled: true },
    { value: 'I can also be dragged', disabled: false },
  ];

  done: any[] = [];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      event.container.data.forEach((etapa, index) => {
        etapa.posicao = index + 1;
      })

    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  listaEtapas(){
    return this.etapas.filter(et => et.tipo_id != 2)
  }

  listaEventos(){
    return this.etapas.filter(et => et.tipo_id == 2)
  }

  listaDetalhes(etapa: Etapa) {

    if (etapa.tipo.id == 1 && etapa.assinantes.length)
      return etapa.assinantes.map(item => item.descricao).reduce((a, b) => a + ' | ' + b);
    if (etapa.tipo.id == 2) {
      if (!etapa.evento)
        return '';
      var detalhes = `${etapa.evento.descricao} ${etapa.evento.itens[0].descricao}`
      if (etapa.evento.ativaCondicional && etapa.evento.condicional)
        return `${detalhes} =>  Se  ${etapa.evento.condicional.campo}  ${etapa.evento.condicional.condicao}  ${etapa.evento.condicional.comparacao}`;
      else return detalhes;
    }
    if (etapa.tipo.id == 3 && etapa.conferencias.length)
      return etapa.conferencias.map(item => item.descricao).reduce((a, b) => a + ' | ' + b);
    if (etapa.tipo.id == 4 && etapa.formularios.length)
      return etapa.formularios.map(item => item.descricao).reduce((a, b) => a + ' | ' + b);
    return '';
  }

  ngOnInit(): void {
  }

  selecionarEtapa(etapa: Etapa) {
    this.etapaSelect = etapa;
  }
  novaEtapa() {
    const result = this.dialog.open(FormularioNovaEtapaComponent)

    result.afterClosed().subscribe(data => {
      this.etapas.push(data)
    }, fail => {

    })
  }

}

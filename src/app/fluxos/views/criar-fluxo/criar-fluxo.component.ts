import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { FiedlService } from '../../../formularios/services/fiedl-service.service';
import { MensagemDialogComponent } from '../../../util/mensagem-dialog/mensagem-dialog.component';
import { FormularioNovaEtapaComponent } from '../formulario-nova-etapa/nova-etapa/formulario-nova-etapa.component';
import { ETAPAS } from '../../models/Etapas';
import { Etapa } from '../../models/Etapa.model';

@Component({
  selector: 'app-criar-fluxo',
  templateUrl: './criar-fluxo.component.html',
  styleUrls: ['./criar-fluxo.component.css']
})
export class CriarFluxoComponent implements OnInit {

  protected etapas: Etapa[] = ETAPAS;
  protected etapaSelect: Etapa = new Etapa();

  constructor(
    private dialog: MatDialog,
    private fiedlService: FiedlService
  ) { }

  todo = [
    { value: 'I can be dragged', disabled: false },
    { value: 'I cannot be dragged', disabled: true },
    { value: 'I can also be dragged', disabled: false },
  ];

  done: any[] = [];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      var etapaSelecionada = this.etapas[event.previousIndex];
      var acaoValida = true;
      var mensagem = ''
      if (etapaSelecionada.tipo_id == 1) {
        if(event.currentIndex == 0){
          mensagem = 'Etada de assinatura não pode ser a primeira.';
          acaoValida = false;
        }else if(this.etapas.filter((item, index) =>
          item.tipo_id == 4 &&
          index < event.currentIndex).length == 0){
          mensagem = 'Etada de assinatura deve ser posterior ao prenchimento de um formulario.';
          acaoValida = false;
        }

      }
      else if (etapaSelecionada.tipo_id == 4) {
        if(this.etapas.find(item => item.tipo_id == 1)){
          if(this.etapas.filter((item, index) =>
            item.tipo_id == 1 &&
            index > event.currentIndex).length == 0){
            mensagem = 'Prenchimento de um formulario deve ser anterior assinatura.';
            acaoValida = false;
          }
        }
      }
      if(acaoValida) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        event.container.data.forEach((etapa, index) => {
          etapa.posicao = index + 1;
        })
      }else{
        this.dialog.open(MensagemDialogComponent, {
          data: {
            titulo: 'Açao inválida!',
            descricao: mensagem
          }
        })
      }

    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.fiedlService.eventoFormulario.emit()
  }

  listaEtapas() {
    return this.etapas.filter(et => et.tipo_id != 2)
  }

  listaEventos() {
    return this.etapas.filter(et => et.tipo_id == 2)
  }

  listaDetalhes(etapa: Etapa) {

    if (etapa.tipo.id == 1 && etapa.assinantes.length)
      return etapa.assinantes.map(item => item.descricao).reduce((a, b) => a + ', ' + b);
 
    if (etapa.tipo.id == 3 && etapa.conferencias.length)
      return etapa.conferencias.map(item => item.descricao).reduce((a, b) => a + ', ' + b);
    if (etapa.tipo.id == 4 && etapa.formularios.length)
      return etapa.formularios.map(item => item.descricao).reduce((a, b) => a + ', ' + b);
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

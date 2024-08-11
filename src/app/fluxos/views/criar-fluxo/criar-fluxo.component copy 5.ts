import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { PrimeIcons, TreeNode } from 'primeng/api';
import { ETAPAS } from '../../Etapas';
import { Etapa } from '../../Etapa.model';
import { FormularioNovaEtapaComponent } from '../../formulario-nova-etapa/formulario-nova-etapa.component';

@Component({
  selector: 'app-criar-fluxo',
  templateUrl: './criar-fluxo.component.html',
  styleUrls: ['./criar-fluxo.component.css']
})
export class CriarFluxo5Component implements OnInit {

  protected etapas: Etapa[] = ETAPAS;
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

  recuperaPosicao(etapaId: number){
    return this.etapas.find(it => it.id == etapaId)?.posicao
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

  onNodeSelect(event:any) {}

  data1: TreeNode[] = [{
    label: 'Inicio',
    type: 'person',
    styleClass: 'p-person p-etapa',
    expanded: true,
    data: {name:'Walter White', 'avatar': 'walter.jpg'},
    children: [
        {
            label: 'Preencher formulario ambiental',
            type: 'person',
            styleClass: 'p-person p-etapa',
            expanded: true,
            data: {name:'Saul Goodman', 'avatar': 'saul.jpg'},
            children: [
              {
                  label: 'Envio de documentos',
                  type: 'person',
                  styleClass: 'p-person p-etapa',
                  expanded: true,
                  data: {name:'Saul Goodman', 'avatar': 'saul.jpg'},
            children: [
              {
                  label: 'Assinatura do requerente',
                  type: 'person',
                  styleClass: 'p-person p-etapa',
                  expanded: true,
                  data: {name:'Saul Goodman', 'avatar': 'saul.jpg'},
                  children: [
                    {
                        label: 'Adiciona tag assinado',
                        type: 'person',
                        styleClass: 'p-person p-evento',
                        expanded: true,
                        data: {name:'Saul Goodman', 'avatar': 'saul.jpg'},
                        children: [
                          {
                            label: 'Envia para setor validação',
                            type: 'person',
                            styleClass: 'p-person p-evento',
                            expanded: true,
                            data: {name:'Saul Goodman', 'avatar': 'saul.jpg'}
                  }]},
                    {
                      label: 'Assinatura do departamento',
                      type: 'person',
                      styleClass: 'p-person p-etapa',
                      expanded: true,
                      data: {name:'Saul Goodman', 'avatar': 'saul.jpg'},
                      children: [
                        {
                            label: 'Envia para setor validação',
                            type: 'person',
                            styleClass: 'p-person p-evento',
                            expanded: true,
                            data: {name:'Saul Goodman', 'avatar': 'saul.jpg'},
                            children: [
                              {
                                label: 'Adicionar tag assinado',
                                type: 'person',
                                styleClass: 'p-person p-evento',
                                expanded: true,
                                data: {name:'Saul Goodman', 'avatar': 'saul.jpg'}
                      }]},
                        {
                          label: 'Encaminha para conferência',
                          type: 'person',
                          styleClass: 'p-person p-etapa',
                          expanded: true,
                          data: {name:'Saul Goodman', 'avatar': 'saul.jpg'}
                      }
                    ]
                  }
                ]
              }
          ]
              }
          ]
        }
    ]
}];;


events1: any[] = [
  {etapa: 'Incio do processo', status: 'Ordered', date: '15/10/2020 10:30', icon: PrimeIcons.FLAG, color: '#772eb9', image: 'game-controller.jpg'},
  {etapa: 'Preencher formulario', status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.FILE, color: '#3aa6b7'},
  {etapa: 'Preencher formulario', status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.FILE, color: '#3aa6b7'},
  {etapa: 'Envio de documentos', status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.PAPERCLIP, color: '#3aa6b7'},

  {etapa: 'Assinatura', status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.PENCIL, color: '#3aa6b7'},
  {etapa: 'Evento', status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.CODE, color: '#ff7601'},

  {etapa: 'Fim do processo',status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
];;

events2: any[] = [
  "2020", "2021", "2022", "2023"
];
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { FormularioNovaEtapaComponent } from 'src/app/formulario-nova-etapa/formulario-nova-etapa.component';
import { Etapa } from 'src/app/model/Etapa.model';
import * as go from 'gojs';
import { ETAPAS } from 'src/app/model/Etapas';

@Component({
  selector: 'app-criar-fluxo',
  templateUrl: './criar-fluxo.component.html',
  styleUrls: ['./criar-fluxo.component.css']
})
export class CriarsFluxoComponent implements OnInit {

  @ViewChild('diagramDiv', { static: true }) diagramDiv!: ElementRef;
  protected etapas: Etapa[] = ETAPAS;
  protected etapaSelect: Etapa = new Etapa();

  constructor() { }

  ngOnInit(): void {
    const $ = go.GraphObject.make; // for conciseness in defining templates

    const myDiagram = $(go.Diagram, this.diagramDiv.nativeElement, {
      layout: $(go.TreeLayout, { angle: 90, layerSpacing: 50 })
    });


    // define a simple Node template
    myDiagram.nodeTemplate =
      $(go.Node, 'Auto',  // the Shape will go around the TextBlock
        $(go.Shape, 'RoundedRectangle', { strokeWidth: 0, fill: 'white' },
          // Shape.fill is bound to Node.data.color
          new go.Binding('fill', 'color')),
          $(go.TextBlock,
            { opacity: 0, editable: false },
            new go.Binding('text', 'key')),
        $(go.TextBlock,
          { margin: 10, width: 250, font: '16px sans-serif', height: 80, textAlign: 'center', editable: false },  // some room around the text
          new go.Binding('text', 'titulo')),
          $(go.TextBlock,
            { margin: 20, width: 250, textAlign: 'center', editable: false },  // some room around the text
            new go.Binding('text', 'detalhes'))

      );

    var itens: any[] = [];
    var links: any[] = [];

    this.etapas.forEach((it, index) => {

      var link1, link2 = undefined;

      if (it.posicao == 1) {
        itens.push({ key:it.posicao , titulo:it.tipo.descricao , detalhes: this.listaDetalhes(it) , color: 'lightblue' })
        links.push({ from: 1, to: this.etapas[1].posicao })
      }
      else {
        if(it.tipo_id == 2){
          itens.push({key:it.posicao , titulo: it.tipo.descricao, detalhes: this.listaDetalhes(it) , color: 'orange'})
          if (index + 1 < this.etapas.length)
            links.push({ from: it.posicao, to: this.etapas[index + 1].posicao })
        }else{
          itens.push({key: it.posicao, titulo: it.tipo.descricao, detalhes: this.listaDetalhes(it) , color: 'lightblue' })
          if (index + 1 < this.etapas.length)
            links.push({ from: it.posicao, to: this.etapas[index + 1].posicao })

          if(it.evento && it.evento.condicional){
            itens.push({ key: 'Condicional' + it.posicao , titulo: 'Condicional' , detalhes: this.listaDetalhes(it) , color: 'red' })
            links.push({ from: it.posicao, to: 'Condicional' + it.posicao })
          }
        }



      }
    })

    myDiagram.model = new go.GraphLinksModel(
      itens,
      links);


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
}

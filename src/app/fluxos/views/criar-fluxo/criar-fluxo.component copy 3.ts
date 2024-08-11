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
export class Criar3FluxoComponent implements OnInit {

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
          { margin: 20, width: 150, textAlign: 'center', editable: false },  // some room around the text
          new go.Binding('text', 'key'))
      );

    var itens: any[] = [];
    var links: any[] = [];

    this.etapas.forEach((it, index) => {

      var link1, link2 = undefined;

      if (it.posicao == 1) {
        itens.push({ key: 'Inicio', color: 'lightblue' })
        links.push({ from: 'Inicio', to: this.etapas[1].tipo.descricao })
      }
      else {
        itens.push({ key: it.tipo.descricao, color: 'lightblue' })
        if (index + 1 < this.etapas.length)
          links.push({ from: it.tipo.descricao, to: this.etapas[index + 1].tipo.descricao })
      }
    })

    myDiagram.model = new go.GraphLinksModel(
      itens,
      links);


  }
}

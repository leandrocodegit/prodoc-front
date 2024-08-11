import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { FormularioNovaEtapaComponent } from 'src/app/formulario-nova-etapa/formulario-nova-etapa.component';
import { Etapa } from 'src/app/model/Etapa.model';
import * as go from 'gojs';

@Component({
  selector: 'app-criar-fluxo',
  templateUrl: './criar-fluxo.component.html',
  styleUrls: ['./criar-fluxo.component.css']
})
export class CriarsFluxoComponent implements OnInit {

  @ViewChild('diagramDiv', { static: true }) diagramDiv!: ElementRef;
  protected etapas: Etapa[] = [];
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
          { margin: 20,width: 150, textAlign: 'center', editable: false },  // some room around the text
          new go.Binding('text', 'key'))
      );

      var itens: any[] = [];

      this.etapas.forEach(it => {
        if(it.posicao == 1)
          itens.push({ key: 'Inicio', color: 'lightblue' })
        else if(it.tipo_id == 1){
          itens.push({ key: it.tipo.descricao, color: 'lightblue' })
        }
        else if(it.tipo_id == 4){
          itens.push({ key: it.tipo.descricao, color: 'lightblue' })
        }

      })

    myDiagram.model = new go.GraphLinksModel(
      [
        { key: 'Inicio', color: 'lightblue' },
        { key: 'Beta', color: 'orange' },
        { key: 'Preencheu formulario', color: 'lightgreen' },
        { key: 'Delta', color: 'pink' },
        { key: 'Gamma', color: 'red' },
        { key: 'Não Preenche formulario', color: 'blue' }

      ],
      [
        { from: 'Inicio', to: 'Beta' },
        { from: 'Beta', to: 'Preencheu formulario' },
        { from: 'Beta', to: 'Não Preenche formulario' },
        { from: 'Preencheu formulario', to: 'Gamma' },
        { from: 'Não Preenche formulario', to: 'Delta' },
        { from: 'Delta', to: 'Alpha' }
      ]);


  }
}

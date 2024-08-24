import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import Viewer from 'bpmn-js/lib/Viewer';
import customTranslate from 'src/app/fluxos/views/criar-fluxo-bpmn/customTranslate/customTranslate';
import { TarefaServiceService } from 'src/app/painel/services/tarefa-service.service';

@Component({
  selector: 'app-view-diagrama',
  templateUrl: './view-diagrama.component.html',
  styleUrl: './view-diagrama.component.css'
})
export class ViewDiagramaComponent implements OnInit {

  private viewer!: Viewer;
  @Input() tarefa: any;
  @ViewChild('canvas', { static: true }) private canvas!: ElementRef;

  constructor(
    private tarefaServiceService: TarefaServiceService
  ) {
    tarefaServiceService.reloadViewer.subscribe(tarefa => {
      console.log(tarefa.taskDefinitionKey);
      this.tarefa = tarefa;
      this.carregarModelo()
    })
  }

  ngOnInit(): void {
    this.carregarModelo()
  }

  carregarModelo(){

    console.log('Load: ',this.tarefa.taskDefinitionKey);

    if(this.tarefa && this.tarefa.processDefinitionId)
      this.tarefaServiceService.xmlTarefa(this.tarefa.processDefinitionId).subscribe(xml => {

        this.canvas.nativeElement.innerHTML = ``

      this.viewer = new Viewer({
        container: this.canvas.nativeElement
      });

      this.viewer.importXML(xml.bpmn20Xml).then(err => {
        if (this.tarefa && this.tarefa.taskDefinitionKey) {

          var elementRegistry: any = this.viewer.get('elementRegistry');
          var gfx = elementRegistry.getGraphics(this.tarefa.taskDefinitionKey)
          var html = gfx.innerHTML;
          gfx.innerHTML = html.replaceAll('stroke: rgb(34, 36, 42);','stroke: #39b6ff;').replaceAll('fill: rgb(34, 36, 42);','stroke: #39b6ff;');

        }
      });
    })
  }

}

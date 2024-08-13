import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Modeler from 'bpmn-js/lib/Modeler';
import BpmnJS from 'bpmn-js/lib/Modeler';

@Component({
  selector: 'app-criar-fluxo-bpmn',
  templateUrl: './criar-fluxo-bpmn.component.html',
  styleUrl: './criar-fluxo-bpmn.component.css'
})
export class CriarFluxoBpmnComponent implements OnInit {

  private bpmnJS!: BpmnJS
  public modeler :any =  new Modeler({});

  @ViewChild('canvas', { static: true }) private canvas!: ElementRef;

  constructor() {







    var intervalo = setInterval(() => {



   // this.bpmnJS.importXML(diagram);
      clearInterval(intervalo)

    },100)

  }

  ngOnInit(): void {
   // this.modeler.attachTo(this.canvas.nativeElement);
   this.modeler = new Modeler({
    container: this.canvas.nativeElement,
    width: '100%',
    height: '600px',
    keyboard: {
      bindTo: window
    },
    additionalModules: [
      require('bpmn-js/lib/features/palette'),
      require('diagram-js-minimap'),
    ],
    palette: {
      open: true,

    }
  });

    const diagram = `<?xml version="1.0" encoding="UTF-8"?>
      <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                        xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                        xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                        xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                        xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
                        id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
        <bpmn:process id="Process_1" isExecutable="false">
          <bpmn:startEvent id="StartEvent_1"/>
        </bpmn:process>
        <bpmndi:BPMNDiagram id="BPMNDiagram_1">
          <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
            <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">
              <dc:Bounds x="173" y="102" width="36" height="36"/>
            </bpmndi:BPMNShape>
          </bpmndi:BPMNPlane>
        </bpmndi:BPMNDiagram>
      </bpmn:definitions>`;


      this.modeler.importXML(diagram)

  }

}

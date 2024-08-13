import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Modeler from 'bpmn-js/lib/Modeler';
import BpmnJS from 'bpmn-js/lib/Modeler';
import { CustomTranslateServiceService } from '../../services/custom-translate-service.service';
import { Etapa } from '../../models/Etapa.model';
import { ETAPAS } from '../../models/Etapas';
import { Shape } from 'bpmn-js/lib/model/Types';

@Component({
  selector: 'app-criar-fluxo-bpmn',
  templateUrl: './criar-fluxo-bpmn.component.html',
  styleUrl: './criar-fluxo-bpmn.component.css'
})
export class CriarFluxoBpmnComponent implements OnInit {

  private bpmnJS!: BpmnJS
  protected element!: Shape
  protected etapas: Etapa[] = ETAPAS;
  public modeler :Modeler =  new Modeler({});

  @ViewChild('canvas', { static: true }) private canvas!: ElementRef;

  constructor(
    private customTranslateService: CustomTranslateServiceService
  ) {
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
    additionalModules:[
      {
        translate: ['value', this.customTranslateService.translate.bind(this.customTranslateService)]
      }
    ],
    palette: {
      open: true,

    }
  });

  this.modeler.on('element.click', (event:any) => this.onElementClick(event));

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
  private onElementClick(event: any): void {
    this.element = event.element;

    if (this.element.type === 'bpmn:Task') {
    const modeling:any = this.modeler.get('modeling');
    const moddle:any = this.modeler.get('moddle');
    
    const extensionElements = moddle.create('bpmn:ExtensionElements');
    const jsonProperty = moddle.create('bpmn:Property', {
      name: 'customData',
      value: JSON.stringify({ key1: this.etapas[0] })
    });
    
    extensionElements.get('values').push(jsonProperty);
    modeling.updateProperties(this.element, {
      extensionElements: extensionElements
    });
    console.log('Custom Data:', this.element);

    this.getData(this.element)

  }
  }

  private getData(element:any): void {  
      console.log('Clicked element:', element);

      // Verifique o tipo do elemento e extraia o JSON ou outras informações
      if (element.type === 'bpmn:Task') {
        const businessObject = element.businessObject;
        const customData = businessObject.extensionElements
          ? businessObject.extensionElements.values.find((ext: any) => ext.name === 'customData')
          : null;

        if (customData) {
          console.log('Custom Data:', customData.$attrs.value
          );
        }
      }
  }

  public exportDiagram(): void {
   this.modeler.saveXML({ format: true }).then(result =>{
      console.log(result.xml);    
   })
  }

}

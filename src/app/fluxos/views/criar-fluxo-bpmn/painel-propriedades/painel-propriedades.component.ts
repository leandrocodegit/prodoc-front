import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
  CamundaPlatformPropertiesProviderModule,
  ZeebePropertiesProviderModule,
  ZeebeTooltipProvider,
  useService
} from 'bpmn-js-properties-panel';

@Component({
  selector: 'app-painel-propriedades',
  templateUrl: './painel-propriedades.component.html',
  styleUrl: './painel-propriedades.component.css'
})
export class PainelPropriedadesComponent implements OnInit {

  @Input() element!: any;
  @Input() modeler!: any
  @ViewChild('icone', { static: true }) private icone!: ElementRef;
  relaoad = true

  @Input() dados: DadosEdicaoElement

  protected ouvintes: any[] = [
    { ativo: true, descricao: 'Email' },
    { ativo: true, descricao: 'Push' }
  ]

  constructor(private renderer: Renderer2, private el: ElementRef) { }


  ngOnInit(): void {
    var x = this.element;
  }

  getIcon() {


    if (this.element) {

      switch (this.element.type) {
        case 'bpmn:EventBasedGateway': return { icon: 'bpmn-icon-gateway-eventbased', name: 'Gateway' };
        case 'bpmn:ComplexGateway': return { icon: 'bpmn-icon-gateway-complex', name: 'Gateway' };
        case 'bpmn:InclusiveGateway': return { icon: 'bpmn-icon-gateway-or', name: 'Gateway' };
        case 'bpmn:ExclusiveGateway': return { icon: 'bpmn-icon-gateway-xor', name: 'Gateway' };
        case 'bpmn:ParallelGateway': return { icon: 'bpmn-icon-gateway-parallel', name: 'Gateway' };
        case 'bpmn:StartEvent': return { icon: 'bpmn-icon-start-event-none', name: 'Evento' };

      }

    }
    return { icon: 'bpmn-icon-color-picker', name: 'Painel' };
  }

  viewFormulario() {
    if (!this.element) {
      return false
    }
    switch (this.element.type) {
      case 'bpmn:UserTask': return true;
      case 'bpmn:ComplexGateway': return true;
      case 'bpmn:InclusiveGateway': return true;
      case 'bpmn:ExclusiveGateway': return true;
      case 'bpmn:ParallelGateway': return true;
      case 'bpmn:StartEvent': return true;

    }
    if (this.element.type.includes('Gateway')) {
      return true;
    }
    else if (this.element.type.includes('Gateway')) {
      return true;
    }
    return false;
  }

  alterarDetalhes() {
    const modeling: any = this.modeler.get('modeling');
    const moddle: any = this.modeler.get('moddle');

    if (this.dados.type == 'bpmn:Process') {
      modeling.updateProperties(this.element, {
        name: this.dados.name,
        id: this.dados.id,
         isExecutable: this.dados.isExecutable,
        jobPriority: this.dados.jobPriority,
      });

    } else {
      modeling.updateProperties(this.element, {
        name: this.dados.name,
        id: this.dados.id,
      });
    }
    if(this.dados.documentation != ''){

      var documentation = moddle.create('bpmn:Documentation', {
        text: this.dados.documentation
      });
      var existingDocumentation:any[] = this.element.businessObject.get('documentation') || [];

      if (existingDocumentation) {
        if(existingDocumentation.length){
          existingDocumentation= []
        }
        existingDocumentation.push(documentation);
        modeling.updateProperties(this.element, {
          documentation: existingDocumentation
        });

      }
    }

  }

}

export interface DadosEdicaoElement {
  type: string,
  id: string,
  name: string,
  documentation: string,
  historyTimeToLive: number,
  isExecutable: boolean,
  jobPriority?: number
}

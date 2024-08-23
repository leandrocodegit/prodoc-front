import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-painel-propriedades',
  templateUrl: './painel-propriedades.component.html',
  styleUrl: './painel-propriedades.component.css'
})
export class PainelPropriedadesComponent implements OnInit {

  @Input() element!: any;
  @Input() modeler!: any;
  @Input() services: any[] = [
    { id: 1, descricao: 'Envio de email', tipo: 'bpmn:SendTask', ativo: false, itens: [] },
    { id: 2, descricao: 'Recebimento de email', tipo: 'bpmn:ReceiveTask', ativo: false, itens: [] },
    { id: 3, descricao: 'Assinar externa', tipo: 'bpmn:UserTask', ativo: false, itens: [] },
    { id: 3, descricao: 'Assinar interna', tipo: 'bpmn:UserTask', ativo: false, itens: [] },

    { id: 4, descricao: 'Calculo juros', tipo: 'bpmn:BusinessRuleTask', ativo: false, itens: [] }
  ];
  @ViewChild('icone', { static: true }) private icone!: ElementRef;
  relaoad = true
  tipoCondicional = 1;

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
        case 'bpmn:ServiceTask': return { icon: 'bpmn-icon-service-task', name: 'Serviço' };
        case 'bpmn:ReceiveTask': return { icon: 'bpmn-icon-receive-task', name: 'Comunicação' };
        case 'bpmn:SendTask': return { icon: 'bpmn-icon-send-task', name: 'Comunicação' };
        case 'bpmn:BusinessRuleTask': return { icon: 'bpmn-icon-business-rule-task', name: 'Regra de ngocios' };
        case 'bpmn:ScriptTask': return { icon: 'bpmn-icon-script-task', name: 'Script' };



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

  listaServicos(){
    return this.services.filter(item => item.tipo === this.dados.type);
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

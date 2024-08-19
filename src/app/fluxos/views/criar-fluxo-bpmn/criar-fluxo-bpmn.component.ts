import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Modeler from 'bpmn-js/lib/Modeler';
import BpmnJS from 'bpmn-js/lib/Modeler';
import { CustomTranslateServiceService } from '../../services/custom-translate-service.service';
import { Etapa } from '../../models/Etapa.model';
import { ETAPAS } from '../../models/Etapas';
import customTranslate from './customTranslate/customTranslate';
import paletteProvider from './custom-palette';
import contextPadProvider from './context-pad';
import ColorPopupProvider from './ColorPopupProvider';

import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
  CamundaPlatformPropertiesProviderModule,
  ZeebePropertiesProviderModule,
  ZeebeTooltipProvider
} from 'bpmn-js-properties-panel';

import BpmnModeler from 'bpmn-js/lib/Modeler';
import { CamundaModdleDescriptor } from './CamundaModdleDescriptor';
import { FormEditor } from '@bpmn-io/form-js';
import { DadosEdicaoElement } from './painel-propriedades/painel-propriedades.component';

@Component({
  selector: 'app-criar-fluxo-bpmn',
  templateUrl: './criar-fluxo-bpmn.component.html',
  styleUrl: './criar-fluxo-bpmn.component.css'
})
export class CriarFluxoBpmnComponent implements OnInit {

  private bpmnJS!: BpmnJS
  protected element!: any
  protected etapas: Etapa[] = ETAPAS;
  public modeler: Modeler = new Modeler({});
  protected dados: DadosEdicaoElement;


  protected tipos = [
    { id: 1, descricao: 'Assinatura' },
    { id: 2, descricao: 'Evento' },
    { id: 3, descricao: 'Enviar para conferência' },
    { id: 4, descricao: 'Preencher forumlário' },

  ]
  protected assinantes = [
    { id: 1, descricao: 'Diretoria', ativo: false },
    { id: 2, descricao: 'Requerente', ativo: false },
    { id: 3, descricao: 'Setor', ativo: false },
  ]

  protected setores = [
    { id: 1, descricao: 'Setor 1', ativo: false },
    { id: 2, descricao: 'Setor 2', ativo: false },
  ]

  protected formularios = [
    { id: 1, descricao: 'Licença ambiental', ativo: false, template: {}, assinantes: {} },
    { id: 2, descricao: 'Pedido de construção', ativo: false, template: {}, assinantes: {} }
  ]

  protected tags = [
    { id: 1, descricao: 'Aguardando assinatura', ativo: false, template: {}, assinantes: {} },
    { id: 2, descricao: 'Pendencia de contrado', ativo: false, template: {}, assinantes: {} }
  ]

  @ViewChild('canvas', { static: true }) private canvas!: ElementRef;
  @ViewChild('properties', { static: true }) private properties!: ElementRef;
  @ViewChild('formulario', { static: true }) private formulario!: ElementRef;
  private formEditor: FormEditor = new FormEditor();

  constructor(
    private customTranslateService: CustomTranslateServiceService
  ) {
  }
  ngOnInit(): void {

    const customTranslateModule = {
      translate: ['value', customTranslate]
    };

    this.modeler = new Modeler({
      container: this.canvas.nativeElement,
      width: '100%',
      height: '600px',
      customTranslateModule,
      propertiesPanel: {
        parent: this.properties.nativeElement
      },
      additionalModules: [
        ColorPopupProvider,
        paletteProvider,
        contextPadProvider,
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule,
        CamundaPlatformPropertiesProviderModule,
        {
          translate: ['value', customTranslate]
        }
      ],
      moddleExtensions: {
        camunda: CamundaModdleDescriptor
      }
    });



    this.modeler.on('element.click', (event: any) => this.onElementClick(event));

    const diagram =
    `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:outgoing>Flow_17zj6ff</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:userTask id="Activity_14pue5m">
      <bpmn:incoming>Flow_17zj6ff</bpmn:incoming>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_17zj6ff" sourceRef="StartEvent_1" targetRef="Activity_14pue5m" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">
        <dc:Bounds x="173" y="102" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_14pue5m_di" bpmnElement="Activity_14pue5m">
        <dc:Bounds x="260" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_17zj6ff_di" bpmnElement="Flow_17zj6ff">
        <di:waypoint x="209" y="120" />
        <di:waypoint x="260" y="120" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;


    this.modeler.importXML(diagram)

  }

  editarDocumentacao(modeling: any, moddle: any) {

    var documentation = moddle.create('bpmn:Documentation', {
      text: 'Documentacao'
    });


    var existingDocumentation = this.element.businessObject.get('documentation') || [];
    if (existingDocumentation) {
      existingDocumentation.push(documentation);

      modeling.updateProperties(this.element, {
        isExecutable: true,
        name: 'teste',
        id: 'P-00124',
        documentation: existingDocumentation
      });

    }
  }

  detalhesDoProcesso(){
    const modeling: any = this.modeler.get('modeling');
      const moddle: any = this.modeler.get('moddle');

        modeling.updateProperties(this.element, {
          historyTimeToLive: 66,
          isExecutable: true,
          name: this.element.businessObject.name,
          id: 'P-00124',
        });
  }

  private onElementClick(event: any): void {

     this.element = event.element;

    console.log(this.element.type);
    console.log(this.element);

    if (this.element.type === 'bpmn:Processss') {
      const modeling: any = this.modeler.get('modeling');
      const moddle: any = this.modeler.get('moddle');



      var executionListener = moddle.create('camunda:ExecutionListener', {
        event: 'start',
        class: 'a',
      });

      // Cria os ExtensionElements e adiciona o executionListener
      var extensionElements = moddle.create('bpmn:ExtensionElements', {
        values: [executionListener]
      });

      modeling.updateProperties(this.element, {
        extensionElements:  extensionElements
      });

    }

    if (this.element.type === '"bpmn:StartEvent"') {
      const modeling: any = this.modeler.get('modeling');
      const moddle: any = this.modeler.get('moddle');

      modeling.updateProperties(this.element, {
        isExecutable: true
      });
    }

    this.carregarDados()
   }

  private getData(element: any): void {
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
    this.modeler.saveXML({ format: true }).then(result => {
      console.log(result.xml);
    })
  }


  carregarFormulario() {
    {
      const translations = {
        undo: 'Desfazer',
        redo: 'Refazer',
        save: 'Salvar',
        validate: 'Validar',
        addField: 'Adicionar Campo',
        removeField: 'Remover Campo',
        editField: 'Editar Campo',
        requiredField: 'Campo obrigatório',
        optionalField: 'Campo opcional',
        Textfield: 'Campo opcional',
        'select': 'Seletor'

        // Adicione mais traduções conforme necessário
      };





      this.loadForm({
        "components": [
          {
            "text": "# File an Invoice\n\nAdd your invoice details below.",
            "type": "text",
            "id": "Field_0bztnfu",
            "layout": {
              "row": "Row_0qvclhs"
            }
          },
          {
            "subtype": "date",
            "dateLabel": "Date",
            "label": "Date time",
            "type": "datetime",
            "layout": {
              "row": "Row_0ym8kuc",
              "columns": null
            },
            "id": "Field_06sc7tf",
            "key": "datetime_x88wjh"
          },
          {
            "key": "creditor",
            "label": "Creditor",
            "type": "textfield",
            "validate": {
              "required": true
            },
            "id": "Field_1wjpy6y",
            "layout": {
              "columns": 2,
              "row": "Row_0ym8kuc"
            }
          },
          {
            "description": "An invoice number in the format: C-123.",
            "key": "invoiceNumber",
            "label": "Invoice Number",
            "type": "textfield",
            "validate": {
              "pattern": "^C-[0-9]+$"
            },
            "id": "Field_1c1mfp9",
            "layout": {
              "row": "Row_14ijgme",
              "columns": 4
            }
          },
          {
            "values": [
              {
                "label": "Value",
                "value": "value"
              }
            ],
            "label": "Seleção",
            "type": "select",
            "layout": {
              "row": "Row_14ijgme",
              "columns": null
            },
            "id": "Field_0i4b4i1",
            "key": "select_hwyyrs"
          },
          {
            "action": "reset",
            "key": "submit",
            "label": "Submit",
            "type": "button",
            "id": "Field_0q2u8oq",
            "conditional": {
              "hide": "=1 = 1\n"
            },
            "properties": {
              "key1": "value"
            },
            "layout": {
              "row": "Row_19g4sfu"
            }
          }
        ],
        "schemaVersion": 16,
        "exporter": {
          "name": "form-js (https://demo.bpmn.io)",
          "version": "1.8.3"
        },
        "type": "default",
        "id": "Form_0w7as02"
      });
    }


  }

  loadForm(schema: any) {
    this.formEditor.importSchema(schema);
  }

 carregarDados() {

    var documentation = '';
    if (this.element) {
      if (this.element.businessObject.documentation && this.element.businessObject.documentation.length) {
        documentation = this.element.businessObject.documentation[0].text;
      }

      const definitions = this.modeler.getDefinitions();
      const processElement = definitions.rootElements.find(element => element.$type === 'bpmn:Process');


      this.dados = {
        type: this.element.type,
        id: this.element.businessObject.id,
        name: this.element.businessObject.name,
        documentation: documentation,
        historyTimeToLive: this.element.type == 'bpmn:Process' ? processElement.historyTimeToLive : 0,
        isExecutable: processElement.isExecutable,
        jobPriority: processElement.jobPriority
      }
    } else {
      this.dados = {
        type: '',
        id: '',
        name: '',
        documentation: '',
        historyTimeToLive: 0,
        isExecutable: false,
        jobPriority: 0
      }
    }
  }
}

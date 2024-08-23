import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormEditor, Textfield } from '@bpmn-io/form-js';
import { CustomTranslateServiceService } from '../../../../fluxos/services/custom-translate-service.service';
import customTranslate from 'src/app/fluxos/views/criar-fluxo-bpmn/customTranslate/customTranslate.js';

@Component({
  selector: 'app-criar-formulario',
  templateUrl: './criar-formulario.component.html',
  styleUrl: './criar-formulario.component.css'
})
export class CriarFormularioComponent implements OnInit {

  @ViewChild('formContainer', { static: true }) formContainer!: ElementRef;
  private formEditor!: FormEditor;

  constructor(
    private customTranslateService: CustomTranslateServiceService
  ) {}

    ngOnInit(): void {
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

      Textfield.bind({
        label:'texto'
      })

      this.formEditor = new FormEditor({
        translate: ['value', customTranslate],
        container: this.formContainer.nativeElement,
        additionalModules:[
          {
            translate: ['value', customTranslate]
          }
        ]
      });
      const palette = this.formEditor.get('palette');




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

    loadForm(schema: any) {
      this.formEditor.importSchema(schema);

      var mo = this.formContainer.nativeElement.innerHTML


    }
}

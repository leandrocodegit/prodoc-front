import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FiedlService } from '../../services/fiedl-service.service';
import { Field } from '../../models/Field.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogInputComponent } from 'src/app/util/dialog-input/dialog-input.component';

@Component({
  selector: 'app-criar-formulario-customizado',
  templateUrl: './criar-formulario-customizado.component.html',
  styleUrl: './criar-formulario-customizado.component.css'
})
export class CriarFormularioCustomizadoComponent {
  fields: Field[] = [];
  protected reload = true;
  done: Field[];
  form: FormGroup = {} as FormGroup;
  fieldSelecionado: Field;
  visaoFormulario = false;

  items = [
    { titulo: 'Campo texto', icone: 'variables', field: 'text', type: 'textfield' },
    { titulo: 'Campo de email', icone: 'email', field: 'email', type: 'textfield' },
    { titulo: 'Campo telefone', icone: 'phone', field: 'tel', type: 'textfield' },
    { titulo: 'Area de texto', icone: 'text_ad', field: 'textarea', type: 'textarea' },
    { titulo: 'Data', icone: 'calendar_month', field: 'date', type: 'textfield' },
    { titulo: 'Hora', icone: 'timer', field: 'time', type: 'textfield' },
    { titulo: 'Numero', icone: 'pin', field: 'number', type: 'textfield' },
    { titulo: 'Endereço', icone: 'markunread_mailbox', field: 'endereco', type: 'endereco' },
    { titulo: 'Cordenadas', icone: 'share_location', field: 'cordenadas', type: 'cordenadas' },
    { titulo: 'Lista de opções', icone: 'format_list_bulleted', field: 'select', type: 'select' },
    { titulo: 'Caixa seleção', icone: 'check_box', field: 'checkbox', type: 'checkbox' },
    { titulo: 'Grupo de opção', icone: 'radio_button_checked', field: 'radio', type: 'radio' },
    { titulo: 'Arquivo', icone: 'folder_open', field: 'file', type: 'textfield' },
    { titulo: 'Parágrafo', icone: 'abc', field: 'p', type: 'text' },
    { titulo: 'Título', icone: 'title', field: 'h5', type: 'text' },
  ];

  constructor(
    private fb: FormBuilder,
    private fiedlService: FiedlService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({});

    this.items.forEach(it => {

    })

  }

  esconderCampo(field: Field) {

  }

  visualizarForumario(){
    this.visaoFormulario = !this.visaoFormulario
  }

  evaluateExpression(expression: string, context: { [key: string]: any }): any {
    return new Function(...Object.keys(context), `return ${expression};`)(...Object.values(context));
  }

  editarIten(field: Field) {
    this.fieldSelecionado = field;
  }

  moveDrop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  addDrop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      let selecionado = this.items[event.previousIndex]

      var campo = new Field()
      campo.extends.subtype = selecionado.field;
      campo.extends.icon = selecionado.icone
      campo.text = "Texto"
      campo.type = selecionado.type

      if(selecionado.field == 'h5')
        campo.extends.fontSize = 26;

      if (selecionado.type === 'endereco') {
        campo.value = {
          cep: "",
          state: "",
          city: "",
          neighborhood: "",
          street: "",
          complemento: "",
          numero: "",
          location: {
            type: "",
            "": {}
          }
        }
      }

      campo.label = selecionado.titulo + (this.fields.filter(fil => fil.extends.subtype === selecionado.field).length + 1)
      campo.id = campo.label.replaceAll(' ', '');

      if (selecionado.type === '# Text') {
        campo.subtype = selecionado.field;
        if (selecionado.field == 'h5') {
          campo.extends.color = 'red'
          campo.value = 'Titulo  de texto'
        }
        if (selecionado.field == 'p') {
          campo.value = 'Parágrafo  de texto'
        }

      }

      this.fields.push(campo);
      moveItemInArray(event.container.data, this.fields.length - 1, event.currentIndex);

      this.fieldSelecionado = campo;

    }
    this.initFormulario()
  }

  initFormulario(): void {




    this.form = this.fb.group({});
    this.fields.forEach(field => {

      if (field.type === 'cordenadas') {

        this.form.addControl(
          field.id + 'lng',
          this.fb.control(field.value && field.value.includes(':') ? field.value.split(':')[0] : '' || '', this.mapValidators(field.validate, field.extends.subtype))
        );
        this.form.addControl(
          field.id,
          this.fb.control(field.value && field.value.includes(':') ? field.value.split(':')[1] : '' || '', this.mapValidators(field.validate, field.extends.subtype))
        );
      }

      if (field.type == 'endereco') {

        if (field.value === '')
          field.value = {
            cep: "",
            state: "",
            city: "",
            neighborhood: "",
            street: "",
            complemento: "",
            numero: "",
            location: {
              type: "",
              "": {}
            }
          }

        this.form.addControl(
          field.id + 'cep',
          this.fb.control(field.value.cep || '', this.mapValidators(field.validate, field.extends.subtype))
        );
        this.form.addControl(
          field.id + 'state',
          this.fb.control(field.value.state || '', this.mapValidators(field.validate, field.extends.subtype))
        );
        this.form.addControl(
          field.id + 'city',
          this.fb.control(field.value.city || '', this.mapValidators(field.validate, field.extends.subtype))
        );
        this.form.addControl(
          field.id + 'neighborhood',
          this.fb.control(field.value.neighborhood || '', this.mapValidators(field.validate, field.extends.subtype))
        );
        this.form.addControl(
          field.id + 'street',
          this.fb.control(field.value.street || '', this.mapValidators(field.validate, field.extends.subtype))
        );
        this.form.addControl(
          field.id + 'numero',
          this.fb.control(field.value.numero || '', this.mapValidators(field.validate, field.extends.subtype))
        );
        this.form.addControl(
          field.id + 'complemento',
          this.fb.control(field.value.complemento || '', this.mapValidators(undefined, field.extends.subtype))
        );
      } else {

        this.form.addControl(
          field.id,
          this.fb.control(field.value || '', this.mapValidators(field.validate, field.extends.subtype))
        );
      }
    });

  }

  mapValidators(validate: {
    minLength: number,
    maxLength: number,
    pattern: string,
    required: boolean
  }, type: string) {

    if (!validate) {
      return [];
    }
    const formValidators = [];
    {
      if (validate.required) {
        formValidators.push(Validators.required);
      }
      if (type === 'email') {
        formValidators.push(Validators.email);
      }
      if ((type === 'number' || type === 'text') && validate.maxLength > 0) {
        formValidators.push(Validators.min(validate.minLength));
        formValidators.push(Validators.max(validate.maxLength));
      }
      if (validate.pattern != '') {
        formValidators.push(Validators.pattern(validate.pattern));
      }
    }
    return formValidators;
  }

  salvar(){
    const retorno = this.dialog.open(DialogInputComponent, {
      data: {
        titulo: 'Nome do formulário',
        text: ''

      }
    })

    retorno.afterClosed().subscribe(data => {
      this.onSubmit(data);
    })
  }

  onSubmit(data?: string) {


    let components: any[] = [];

    this.fields.forEach(field => {

      if (field.type == 'endereco') {
        field.value = {
          cep: this.form.controls[field.id + 'cep'].value,
          state: this.form.controls[field.id + 'state'].value,
          city: this.form.controls[field.id + 'city'].value,
          neighborhood: this.form.controls[field.id + 'neighborhood'].value,
          street: this.form.controls[field.id + 'street'].value,
          numero: this.form.controls[field.id + 'numero'].value,
          complemento: this.form.controls[field.id + 'complemento'].value,
          location: {
            type: "",
            "": {}
          }
        }
      }
      else if (field.type == 'cordenadas') {
        field.value = `${this.form.controls[field.id].value}:${this.form.controls[field.id + 'lng'].value}`
      } else {
        if (field.type != 'radio')
          field.value = this.form.controls[field.id].value;
      }

    })


    this.fields.forEach(field => {

      let campo: any = {};

      campo.label = field.label;
      campo.type = field.type;
      campo.id = field.id;
      campo.key = field.id;

      if (field.description != '')
        campo.description = field.description;
      if (field.conditional && field.conditional.hide != '')
        campo.description = field.conditional;
      if (field.validate) {

        if (field.validate.minLength > 0) {
          campo.validate.minLength = field.validate.minLength;
        }
        if (field.validate.maxLength > 0) {
          campo.validate.maxLength = field.validate.maxLength;
        }
        if (field.validate.pattern != '') {
          campo.validate.pattern = field.validate.pattern;
        }
        if (field.validate.required) {
          campo.validate.required = field.validate.required;
        }
      }
      campo.description = field.description;
      if (field.value)
        campo.value = field.value;
      if (field.description != '')
        campo.description = field.description;
      if (field.readonly)
        campo.readonly = field.readonly;
      if (field.disabled)
        campo.disabled = field.disabled;
      if (field.searchable)
        campo.searchable = field.searchable;
      if (field.disallowPassedDates)
        campo.disallowPassedDates = field.disallowPassedDates;

      if (field.values.length)
        campo.values = field.values;
      if (field.timeLabel != '')
        campo.timeLabel = field.timeLabel;
      if (field.timeSerializingFormat != '')
        campo.timeSerializingFormat = field.timeSerializingFormat;
      if (field.timeInterval > 0)
        campo.timeInterval = field.timeInterval;

      if(field.extends.subtype == 'date')
        campo.type = 'date';
      if(field.extends.subtype == 'time')
        campo.type = 'datetime';
      if(field.extends.subtype == 'cordenadas')
        campo.type = 'textfield';
      if(field.extends.subtype == 'number')
        campo.type = 'number';
      if(field.extends.subtype == 'text')
        campo.type = 'textfield';
      if(field.extends.subtype == 'endereco')
        campo.type = 'textfield';
      if(field.extends.subtype == 'textarea')
        campo.type = 'textarea';
      if(field.extends.subtype == 'file')
        campo.type = 'textfield';

      campo.extends = field.extends;

      components.push(campo)

    })



    let form = {
      name: data,
      components: components,
      schemaVersion: 16,
      exporter: {
        name: "Camunda Modeler",
        version: "5.26.0"
      },
      type: "default",
      id: "Form_0w7as02"
    }

    console.log(this.fields);
    console.log(JSON.stringify(form));



  }
}


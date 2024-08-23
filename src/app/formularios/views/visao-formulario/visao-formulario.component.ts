import { Component, Input, OnInit } from '@angular/core';
import { Field } from '../../models/Field.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-visao-formulario',
  templateUrl: './visao-formulario.component.html',
  styleUrl: './visao-formulario.component.css'
})
export class VisaoFormularioComponent implements OnInit {

  @Input() fields: Field[] = [];
  form: FormGroup = {} as FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.initFormulario();
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

  onSubmit() {

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



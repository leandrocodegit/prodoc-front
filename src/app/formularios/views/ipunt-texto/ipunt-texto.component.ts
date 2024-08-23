import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FiedlService } from '../../services/fiedl-service.service';

@Component({
  selector: 'app-ipunt-texto',
  templateUrl: './ipunt-texto.component.html',
  styleUrls: ['./ipunt-texto.component.css']
})
export class IpuntTextoComponent implements OnInit {

  @Input() viewSubmit = false;
  @Input() fields: any[] = [];
  form: FormGroup = {} as FormGroup;

  constructor(
    private fb: FormBuilder,
    private fiedlService: FiedlService
  ) { }

  ngOnInit(): void {




    this.form = this.fb.group({});
    this.fields.forEach(field => {

      if (field.type === 'cordenadas') {

        this.form.addControl(
          field.id + 'lng',
          this.fb.control(field.defaultValue && field.defaultValue.includes(':') ? field.defaultValue.split(':')[0] : '' || '', this.mapValidators(field.validate, field.type))
        );
        this.form.addControl(
          field.id,
          this.fb.control(field.defaultValue && field.defaultValue.includes(':') ? field.defaultValue.split(':')[1] : '' || '', this.mapValidators(field.validate, field.type))
        );
      }

      if (field.type == 'endereco') {

        if (field.defaultValue === '')
          field.defaultValue = {
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
          this.fb.control(field.defaultValue.cep || '', this.mapValidators(field.validate, field.type))
        );
        this.form.addControl(
          field.id + 'state',
          this.fb.control(field.defaultValue.state || '', this.mapValidators(field.validate, field.type))
        );
        this.form.addControl(
          field.id + 'city',
          this.fb.control(field.defaultValue.city || '', this.mapValidators(field.validate, field.type))
        );
        this.form.addControl(
          field.id + 'neighborhood',
          this.fb.control(field.defaultValue.neighborhood || '', this.mapValidators(field.validate, field.type))
        );
        this.form.addControl(
          field.id + 'street',
          this.fb.control(field.defaultValue.street || '', this.mapValidators(field.validate, field.type))
        );
        this.form.addControl(
          field.id + 'numero',
          this.fb.control(field.defaultValue.numero || '', this.mapValidators(field.validate, field.type))
        );
        this.form.addControl(
          field.id + 'complemento',
          this.fb.control(field.defaultValue.complemento || '', this.mapValidators(undefined, field.type))
        );
      } else {

        this.form.addControl(
          field.id,
          this.fb.control(field.defaultValue || '', this.mapValidators(field.validate, field.type))
        );
      }
    });

    var valida = this.form.controls['idade'].validator

  }

  mapValidators(validate: {
    minLength: number,
    maxLength: number,
    pattern: string,
    required: boolean
  }, type: string) {

    if(!validate){
      return [];
    }
    const formValidators = [];
    {
      if (validate.required) {
        formValidators.push(Validators.required);
        if (type === 'email') {
          formValidators.push(Validators.email);
        }
      }
      if (validate.maxLength > 0 && validate.maxLength > validate.minLength) {
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

    this.fields.forEach(field => {

      if (field.type == 'endereco') {
        field.defaultValue = {
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
        field.defaultValue = `${this.form.controls[field.id].value}:${this.form.controls[field.id + 'lng'].value}`
      } else {
        field.defaultValue = this.form.controls[field.id].value;
      }

    })

    console.log(this.fields);


  }
}


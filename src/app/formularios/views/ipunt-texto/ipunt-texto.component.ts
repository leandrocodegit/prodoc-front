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
          field.name + 'lng',
          this.fb.control(field.value && field.value.includes(':') ? field.value.split(':')[0] : '' || '', this.mapValidators(field.required, field.type))
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
          field.name + 'cep',
          this.fb.control(field.value.cep || '', this.mapValidators(field.required, field.type))
        );
        this.form.addControl(
          field.name + 'state',
          this.fb.control(field.value.state || '', this.mapValidators(field.required, field.type))
        );
        this.form.addControl(
          field.name + 'city',
          this.fb.control(field.value.city || '', this.mapValidators(field.required, field.type))
        );
        this.form.addControl(
          field.name + 'neighborhood',
          this.fb.control(field.value.neighborhood || '', this.mapValidators(field.required, field.type))
        );
        this.form.addControl(
          field.name + 'street',
          this.fb.control(field.value.street || '', this.mapValidators(field.required, field.type))
        );
        this.form.addControl(
          field.name + 'numero',
          this.fb.control(field.value.numero || '', this.mapValidators(field.required, field.type))
        );
        this.form.addControl(
          field.name + 'complemento',
          this.fb.control(field.value.complemento || '', this.mapValidators(false, field.type))
        );
      } else {

        this.form.addControl(
          field.name,
          this.fb.control(field.value && field.value.includes(':') ? field.value.split(':')[1] : '' || '', this.mapValidators(field.required, field.type))
        );
      }
    });

  }

  mapValidators(required: boolean, type: string) {
    const formValidators = [];
    {
      if (required) {
        formValidators.push(Validators.required);
        if (type === 'email') {
          formValidators.push(Validators.email);
        }
      }
    }
    return formValidators;
  }

  onSubmit() {

    this.fields.forEach(field => {

      if (field.type == 'endereco') {
        field.value = {
          cep: this.form.controls[field.name + 'cep'].value,
          state: this.form.controls[field.name + 'state'].value,
          city: this.form.controls[field.name + 'city'].value,
          neighborhood: this.form.controls[field.name + 'neighborhood'].value,
          street: this.form.controls[field.name + 'street'].value,
          numero: this.form.controls[field.name + 'numero'].value,
          complemento: this.form.controls[field.name + 'complemento'].value,
          location: {
            type: "",
            "": {}
          }
        }
      }
      else if (field.type == 'cordenadas') {
        field.value = `${this.form.controls[field.name].value}:${this.form.controls[field.name + 'lng'].value}`
      } else {
        field.value = this.form.controls[field.name].value;
      }

    })

    console.log(this.fields);


  }
}

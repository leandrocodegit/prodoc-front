import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/Field.model';

@Component({
  selector: 'app-input-field',
  template: `
<div class="componente-customizado" *ngIf="form" [formGroup]="form">
  <label>{{field.label}}</label>
  <div class="componente-customizado-icon">
    <input *ngIf="field.type == 'textfield'" [formControlName]="field.id" [type]="field.extends.subtype" class="form-control input-cusomizado" />
    <textarea *ngIf="field.type == 'textarea'" [formControlName]="field.id" class="form-control input-cusomizado" ></textarea>
    <span *ngIf="isValid && isTouched" class="material-symbols-outlined">
      task_alt
    </span>
  </div>
  <div *ngIf="!isValid && isTouched" class="error-message">
    <div class="text-danger" *ngIf="possuiErro(form.controls[field.id])">
      {{ possuiErro(form.controls[field.id]) }}
    </div>
  </div>
</div>
`
})
export class InputFieldComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;

  possuiErro(form: any) {
    if (!form || !form.errors) {
      return false
    }
    if(form.errors.email){
      return 'Email invalido';
    }
    if(form.errors.required){
      return this.field.label + ' é obrigatório';
    }
    if(form.errors.pattern){
      return this.field.extends.message;
    }
    if(form.errors.min){
      return `Valor mínimo é ${this.field.validate.minLength}`;
    }
    if(form.errors.max){
      return `Valor máximo é ${this.field.validate.maxLength}`;
    }
    return ''
  }

  get isValid(): boolean {
    if (this.form.controls[this.field.id])
      return this.form.controls[this.field.id].valid;
    return false;
  }

  get isTouched(): boolean {
    if (this.form.controls[this.field.id])
      return this.form.controls[this.field.id].touched;
    return false
  }
}

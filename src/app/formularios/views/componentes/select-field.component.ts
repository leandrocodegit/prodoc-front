import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/Field.model';

@Component({
  selector: 'app-select-field',
  template: `
<div class="componente-customizado" *ngIf="form" [formGroup]="form">
  <label>{{field.label}}</label>
  <div class="componente-customizado-icon">
    <select [formControlName]="field.name" class="form-select input-cusomizado">
      <option value="0" disabled selected>Selecione um {{field.label}}</option>
      <option *ngFor="let option of field.options" [value]="option">{{option}}</option>
    </select>
    <span *ngIf="isValid && isTouched" class="material-symbols-outlined">
      task_alt
    </span>
  </div>
  <div *ngIf="!isValid && isTouched" class="error-message">
    <div class="text-danger" *ngIf="possuiErro(form.controls[field.name])">
      {{ field.label }} é obrigatório.
    </div>
  </div>
</div>
  `
})
export class SelectFieldComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;


  possuiErro(form: any) {
    if (!form || !form.errors) {
      return false
    }
    return form.errors.required
  }

  get isValid(): boolean {
    if (this.form.controls[this.field.name])
      return this.form.controls[this.field.name].valid;
    return false;
  }

  get isTouched(): boolean {
    if (this.form.controls[this.field.name])
      return this.form.controls[this.field.name].touched;
    return false
  }
}

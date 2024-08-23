import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/Field.model';

@Component({
  selector: 'app-select-field',
  template: `
<div class="componente-customizado" *ngIf="form" [formGroup]="form">
  <label>{{field.label}}</label>
  <div class="componente-customizado-icon">
    <select [formControlName]="field.id"  class="form-select input-cusomizado">
      <option value="0" disabled>Selecione um item</option>
      <option *ngFor="let option of field.values" [selected]="option.value == field.value" [value]="option.value">{{option.label}}</option>
    </select>
    <span *ngIf="isValid && isTouched" class="material-symbols-outlined">
      task_alt
    </span>
  </div>
  <div *ngIf="!isValid && isTouched" class="error-message">
    <div class="text-danger" *ngIf="possuiErroPattern(form.controls[field.id])">
      {{ field.validate.message }}
    </div>
  </div>
</div>
  `
})
export class SelectFieldComponent implements OnInit {
  @Input() field!: Field;
  @Input() form!: FormGroup;

  ngOnInit(): void {
    if (!this.field.value && this.field.defaultValue) {
      this.field.value = this.field.defaultValue
    }
  }

  possuiErroPattern(form: any) {
    if (!form || !form.errors) {
      return false
    }
    return form.errors.pattern
  }

  possuiErro(form: any) {
    if (!form || !form.errors) {
      return false
    }
    return form.errors.required
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

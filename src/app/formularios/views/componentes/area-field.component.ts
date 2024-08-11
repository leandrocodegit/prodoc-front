import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/Field.model';

@Component({
  selector: 'app-textarea-field',
  template: `
<div class="componente-customizado" *ngIf="form" [formGroup]="form">
  <label>{{ field.label }}</label>
  <div class="componente-customizado-icon">
    <textarea [formControlName]="field.name" class="form-control"></textarea>
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
export class AreaFieldComponent {
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

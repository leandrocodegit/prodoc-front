import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/Field.model';

@Component({
  selector: 'app-file-field',
  template: `
<div class="componente-customizado" *ngIf="form" [formGroup]="form">
  <label>{{field.label}}</label>
  <div>
    <div class="componente-customizado-icon">
      <input [formControlName]="field.name" [type]="field.type" [multiple]="field.multiple" [accept]="listaOpcoes()"
        class="form-control input-cusomizado" />
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
</div>
  `
})
export class FileFieldComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;


  possuiErro(form: any) {
    if (!form || !form.errors) {
      return false
    }
    return form.errors.required
  }

  listaOpcoes() {
    var pattern = '';
    if (this.field.options && this.field.options.length) {
      this.field.options.forEach(item => {
        if (item === 'pdf') {
          pattern += '.pdf,'
        }
        if (item === 'office') {
          pattern += '.docx,.exl,.pp,'
        }
        if (item === 'imagem') {
          pattern += '.png,.webp,.jpg,'
        }
        if (item === 'video') {
          pattern += '.mp4'
        }
      })
    }
    if (pattern === '')
      return '*';
    return pattern
  }

  file() {
    if (this.form && this.form.controls && this.form.controls[this.field.name] && this.form.controls[this.field.name].value)
      return this.form.controls[this.field.name].value;
    return '';
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

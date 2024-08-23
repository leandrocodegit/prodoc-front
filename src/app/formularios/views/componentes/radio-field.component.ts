import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/Field.model';

@Component({
  selector: 'app-radio-field',
  template: `
<div class="componente-customizado" *ngIf="form" [formGroup]="form">
  <label>{{field.label}}</label>
  <div class="componente-customizado-icon componente-customizado-radio">
  <label *ngFor="let option of field.values">
      <input type="radio" (change)="select(option.value)" [formControlName]="field.id" type="radio" [checked]="option.value == field.value"  [value]="option.value"> {{option.label}}
  </label>
  </div>
</div>
  `,
  styles: `
  .componente-customizado-radio{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
  `
})
export class RadioFieldComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;

  possuiErroPattern(form: any) {
    if (!form || !form.errors) {
      return false
    }
    return form.errors.pattern
  }

  select(value:any){
    if(this.field.value)
      this.field.value = value
    else if(this.field.defaultValue){
      this.field.value = this.field.defaultValue
    }
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

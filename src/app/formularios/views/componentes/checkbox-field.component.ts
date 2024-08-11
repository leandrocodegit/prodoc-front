import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/Field.model';

@Component({
  selector: 'app-checkbox-field',
  template: `
<div class="componente-customizado" *ngIf="form" [formGroup]="form">
<div class="form-check">
  <input class="form-check-input" type="checkbox"
  [formControlName]="field.name"
    value="something" checked>
  <label class="form-check-label">{{field.label}}</label>
  </div>
</div>
  `
})
export class CheckboxFieldComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;
}

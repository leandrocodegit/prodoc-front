import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../../models/Field.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  @Input() field!: Field;
  @Input() form!: FormGroup;


  possuiErro(form: any) {
    if (!form || !form.errors) {
      return false
    }
    return form.errors.required
  }

  get file(){
    if (this.form && this.form.controls && this.form.controls[this.field.name])
      return this.form.controls[this.field.name].value;
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

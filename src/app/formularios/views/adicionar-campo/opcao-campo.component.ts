import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Field } from '../../models/Field.model';

@Component({
  selector: 'app-adicionar-campo',
  template: `
    <div class="p-4">
    <label for="Tipo"></label>
    <input [(ngModel)]=item type="text" class="form-control"  name="tipo">
  </div>
  <app-salvar-fechar class="p-4" (fecharEmit)="fechar()" (salvarEmit)="novaOpcao()"></app-salvar-fechar>
  `,
  styleUrls: ['./adicionar-campo.component.css']
})
export class OpcaoSeletorCampoComponent implements OnInit {

  @Input() field: Field;
  @Input() item = '';
  private index?: number;

  constructor(
    public dialogRef: MatDialogRef<OpcaoSeletorCampoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.field = data.field;
    this.item = data.item;
  }

  ngOnInit(): void {
    if (!this.field) {
      this.field = new Field()
    }
    if (this.item) {
      this.index = this.field.options?.indexOf(this.item)
    }
  }

  fechar() {
    this.dialogRef.close();
  }


  novaOpcao() {
    if (this.item && (this.index || this.index === 0) && this.field.options?.length) {
      this.field.options[this.index] = this.item;
    } else {
      if (!this.field.options?.find(option => option == this.item))
        this.field.options?.push(this.item)
    }
    this.dialogRef.close(this.field);
  }

}

import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OpcaoSeletorCampoComponent } from './opcao-campo.component';
import { Field } from '../../models/Field.model';

@Component({
  selector: 'app-adicionar-campo',
  templateUrl: './adicionar-campo.component.html',
  styleUrls: ['./adicionar-campo.component.css']
})
export class AdicionarCampoComponent implements OnInit {

  @Input() field: Field;

  constructor(
    public dialogRef: MatDialogRef<AdicionarCampoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialog
  ) {
    this.field = data;
   }

  ngOnInit(): void {

    if(!this.field){
      this.field = new Field()
    }
  }

  adicionar(){
    if(this.field.type != 'select' && this.field.type != 'file')
      this.field.values = [];
    this.dialogRef.close(this.field);
  }

  fechar(){
    this.dialogRef.close();
  }

  possuiExtensao(extensao: string){
    if(this.field.values?.find(ext => ext == extensao))
      return true;
    return false;
  }

  novaTipoArquivo(extensao: string){
    if(!this.possuiExtensao(extensao))
      this.field.values?.push(extensao)
    else{
      this.field.values = this.field.values?.filter(ext => ext != extensao)
    }
  }

  editarOpcao(item: any){
    this.dialog.open(OpcaoSeletorCampoComponent, {
      data: {
        field: this.field,
        item: item
      }
    })
  }

  novaOpcao(){
    this.dialog.open(OpcaoSeletorCampoComponent, {
      data: {
        field: this.field,
      }
    })
  }

}

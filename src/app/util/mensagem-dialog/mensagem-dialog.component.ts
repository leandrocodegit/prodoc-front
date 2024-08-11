import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mensagem-dialog',
  templateUrl: './mensagem-dialog.component.html',
  styleUrl: './mensagem-dialog.component.css'
})
export class MensagemDialogComponent {

 protected mensagem:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any
  ){
    this.mensagem = data
  }
}

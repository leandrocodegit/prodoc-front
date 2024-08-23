import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-input',
  templateUrl: './dialog-input.component.html',
  styleUrl: './dialog-input.component.css'
})
export class DialogInputComponent {

  protected dados: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<DialogInputComponent>
  ) {
    this.dados = data;
  }

  salvar() {
    this.dialog.close(this.dados.text)
  }

  fechar() {
    this.dialog.close()
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalvarFecharComponent } from '../salvar-fechar/salvar-fechar.component';
import { MensagemDialogComponent } from '../mensagem-dialog/mensagem-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    SalvarFecharComponent,
    MensagemDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    SalvarFecharComponent,
    MensagemDialogComponent
  ]
})
export class UtilModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalvarFecharComponent } from '../salvar-fechar/salvar-fechar.component';
import { MensagemDialogComponent } from '../mensagem-dialog/mensagem-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TituloComponent } from '../titulo/titulo.component';



@NgModule({
  declarations: [
    SalvarFecharComponent,
    MensagemDialogComponent,
    TituloComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    SalvarFecharComponent,
    MensagemDialogComponent,
    TituloComponent
  ]
})
export class UtilModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalvarFecharComponent } from '../salvar-fechar/salvar-fechar.component';
import { MensagemDialogComponent } from '../mensagem-dialog/mensagem-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TituloComponent } from '../titulo/titulo.component';
import { DialogInputComponent } from '../dialog-input/dialog-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SalvarFecharComponent,
    MensagemDialogComponent,
    TituloComponent,
    DialogInputComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    SalvarFecharComponent,
    MensagemDialogComponent,
    TituloComponent,
    DialogInputComponent
  ]
})
export class UtilModule { }

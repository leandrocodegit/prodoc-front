import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalvarFecharComponent } from '../salvar-fechar/salvar-fechar.component';
import { MensagemDialogComponent } from '../mensagem-dialog/mensagem-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TituloComponent } from '../titulo/titulo.component';
import { DialogInputComponent } from '../dialog-input/dialog-input.component';
import { FormsModule } from '@angular/forms';
import { DashboardTarefasComponent } from '../dashboard-tarefas/dashboard-tarefas.component';
import { ViewDiagramaComponent } from '../view-diagrama/view-diagrama.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { VisualizarPdfComponent } from '../visualizar-pdf/visualizar-pdf.component';

@NgModule({
  declarations: [
    SalvarFecharComponent,
    MensagemDialogComponent,
    TituloComponent,
    DialogInputComponent,
    DashboardTarefasComponent,
    ViewDiagramaComponent,
    VisualizarPdfComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    PdfViewerModule
  ],
  exports: [
    SalvarFecharComponent,
    MensagemDialogComponent,
    TituloComponent,
    DialogInputComponent,
    DashboardTarefasComponent,
    ViewDiagramaComponent,
    VisualizarPdfComponent,
  ]
})
export class UtilModule { }

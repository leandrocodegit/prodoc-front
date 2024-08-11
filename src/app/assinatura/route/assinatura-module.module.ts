import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimelineModule } from 'primeng/timeline';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { UtilModule } from '../../util/route/util-module.module';
import { AssinaturaRoutingModule } from './assinatura-routing.module';
import { AssinarDocumentoComponent } from '../assinar-documento/assinar-documento.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    AssinarDocumentoComponent
  ],
  imports: [
    CommonModule,
    AssinaturaRoutingModule,
    FormsModule,
    TimelineModule,
    HttpClientModule,
    PdfViewerModule,
    ReactiveFormsModule,
    DragDropModule,
    MatDialogModule,
    UtilModule,
    NgxExtendedPdfViewerModule
  ]
})
export class AssinaturaModule { }

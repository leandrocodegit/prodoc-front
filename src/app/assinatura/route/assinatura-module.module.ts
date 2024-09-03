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
import { StepperModule } from 'primeng/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

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
    NgxExtendedPdfViewerModule,
    StepperModule,
    MatStepperModule,
    MatIconModule,
    MatBottomSheetModule
  ],
  exports: [
    AssinarDocumentoComponent
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ]
})
export class AssinaturaModule { }

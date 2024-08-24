import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilModule } from '../../util/route/util-module.module';
import { PainelRoutingModule } from './painel-routing.module';
import { PainelTarefasComponent } from '../views/painel-tarefas/painel-tarefas.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormularioModule } from 'src/app/formularios/route/formulario-module.module';
import { PainelValidacaoDocumentosComponent } from '../views/painel-validacao-documentos/painel-validacao-documentos.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ReactiveFormsModule } from '@angular/forms';
import { AssinaturaModule } from 'src/app/assinatura/route/assinatura-module.module';
import { TimelineModule } from 'primeng/timeline';
import { TabViewModule } from 'primeng/tabview';
import { PainelValidacaoFormularioComponent } from '../views/painel-validacao-formulario/painel-validacao-formulario.component';

@NgModule({
  declarations: [
    PainelTarefasComponent,
    PainelValidacaoDocumentosComponent,
    PainelValidacaoFormularioComponent
  ],
  imports: [
    CommonModule,
    PainelRoutingModule,
    UtilModule,
    MatTabsModule,
    FormularioModule,
    NgxExtendedPdfViewerModule,
    HttpClientModule,
    PdfViewerModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    AssinaturaModule,
    TimelineModule,
    TabViewModule

  ]
})
export class PainelModule { }

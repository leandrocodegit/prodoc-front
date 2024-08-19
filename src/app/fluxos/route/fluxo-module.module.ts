import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimelineModule } from 'primeng/timeline';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { UtilModule } from '../../util/route/util-module.module';
import { FluxoRoutingModule } from './fluxo-routing.module';
import { CriarFluxoComponent } from '../views/criar-fluxo/criar-fluxo.component';
import { TabelaEtapaComponent } from '../views/formulario-nova-etapa/tabela-etapa/tabela-etapa.component';
import { DescricaoFluxoEtapasComponent } from '../views/descricao-fluxo-etapas/descricao-fluxo-etapas.component';
import { FormularioNovaEtapaComponent } from '../views/formulario-nova-etapa/nova-etapa/formulario-nova-etapa.component';
import { FormularioEventoComponent } from '../views/formulario-evento/formulario-evento/formulario-evento.component';
import { CondicionalFormularioComponent } from '../views/formulario-evento/condicional-formulario/condicional-formulario.component';
import { CondicionalAssinaturaComponent } from '../views/formulario-evento/condicional-assinatura/condicional-assinatura.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CriarFluxoBpmnComponent } from '../views/criar-fluxo-bpmn/criar-fluxo-bpmn.component';
import { PainelPropriedadesComponent } from '../views/criar-fluxo-bpmn/painel-propriedades/painel-propriedades.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    CriarFluxoComponent,
    FormularioNovaEtapaComponent,
    TabelaEtapaComponent,
    FormularioEventoComponent,
    CondicionalFormularioComponent,
    CondicionalAssinaturaComponent,
    DescricaoFluxoEtapasComponent,
    FormularioNovaEtapaComponent,
    CriarFluxoBpmnComponent,
    PainelPropriedadesComponent
  ],
  imports: [
    CommonModule,
    FluxoRoutingModule,
    FormsModule,
    TimelineModule,
    HttpClientModule,
    PdfViewerModule,
    ReactiveFormsModule,
    DragDropModule,
    MatDialogModule,
    UtilModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ]
})
export class FluxoModule { }

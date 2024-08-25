import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelTarefasComponent } from '../views/painel-tarefas/painel-tarefas.component';
import { PainelValidacaoDocumentosComponent } from '../views/painel-validacao-documentos/painel-validacao-documentos.component';
import { VisualizarPdfComponent } from 'src/app/util/visualizar-pdf/visualizar-pdf.component';

const routes: Routes = [
  { path: '', component: PainelTarefasComponent },
  { path: 'validar', component: PainelValidacaoDocumentosComponent },
  { path: 'view', component: PainelValidacaoDocumentosComponent }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class PainelRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelTarefasComponent } from '../views/painel-tarefas/painel-tarefas.component';
import { PainelValidacaoDocumentosComponent } from '../views/painel-validacao-documentos/painel-validacao-documentos.component';
import { PainelAssinaturaInternaComponent } from '../views/painel-assinatura-interna/painel-assinatura-interna.component';

const routes: Routes = [
  { path: '', component: PainelTarefasComponent },
  { path: 'validar', component: PainelValidacaoDocumentosComponent },
  { path: 'view', component: PainelAssinaturaInternaComponent }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class PainelRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarFluxoComponent } from '../views/criar-fluxo/criar-fluxo.component';
import { CriarFluxoBpmnComponent } from '../views/criar-fluxo-bpmn/criar-fluxo-bpmn.component';

const routes: Routes = [
  { path: '', component: CriarFluxoComponent },
  { path: 'bpmn', component: CriarFluxoBpmnComponent  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class FluxoRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarFluxoComponent } from '../views/criar-fluxo/criar-fluxo.component';
const routes: Routes = [
  { path: '', component: CriarFluxoComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class FluxoRoutingModule { }

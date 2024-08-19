import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCustomizadoComponent } from '../views/formulario-customizado/formulario-customizado.component';
import { VisualisarFormularioPreenchidoComponent } from '../views/visualisar-formulario-preenchido/visualisar-formulario-preenchido.component';
import { CriarFormularioComponent } from '../views/form/criar-formulario/criar-formulario.component';

const routes: Routes = [
  { path: '', component: FormularioCustomizadoComponent },
  { path: 'view', component: VisualisarFormularioPreenchidoComponent },
  { path: 'form', component: CriarFormularioComponent },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class FormularioRoutingModule { }

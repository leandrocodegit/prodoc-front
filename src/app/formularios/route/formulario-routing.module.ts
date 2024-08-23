import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCustomizadoComponent } from '../views/formulario-customizado/formulario-customizado.component';
import { VisualisarFormularioPreenchidoComponent } from '../views/visualisar-formulario-preenchido/visualisar-formulario-preenchido.component';
import { CriarFormularioComponent } from '../views/form/criar-formulario/criar-formulario.component';
import { CriarFormularioCustomizadoComponent } from '../views/criar-formulario-customizado/criar-formulario-customizado.component';

const routes: Routes = [
  { path: '', component: FormularioCustomizadoComponent },
  { path: 'view', component: VisualisarFormularioPreenchidoComponent },
  { path: 'form', component: CriarFormularioComponent },
  { path: 'drag', component: CriarFormularioCustomizadoComponent },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class FormularioRoutingModule { }

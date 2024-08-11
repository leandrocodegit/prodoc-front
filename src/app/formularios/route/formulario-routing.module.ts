import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssinaturaComponent } from '../views/assinatura/assinatura.component';
import { FormularioCustomizadoComponent } from '../views/formulario-customizado/formulario-customizado.component';

const routes: Routes = [
  { path: '', component: FormularioCustomizadoComponent },
  { path: 'assinar', component: AssinaturaComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class FormularioRoutingModule { }

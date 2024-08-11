import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioModule } from './formularios/route/formulario-module.module';
import { FluxoModule } from './fluxos/route/fluxo-module.module';
import { AssinaturaModule } from './assinatura/route/assinatura-module.module';

const routes: Routes = [
  { path:'', loadChildren: () => FluxoModule, data: { title: 'Meu cadastro' } },
  { path: 'assinar', loadChildren: () => AssinaturaModule, data: { title: 'Meu cadastro' } },
  { path: 'formulario', loadChildren: () => FormularioModule, data: { title: 'Meu cadastro' } },
 // {path: '', component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

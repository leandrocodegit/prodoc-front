import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioModule } from './formularios/route/formulario-module.module';
import { FluxoModule } from './fluxos/route/fluxo-module.module';
import { AssinaturaModule } from './assinatura/route/assinatura-module.module';
import { PainelModule } from './painel/route/painel-module.module';

const routes: Routes = [
  { path: '', loadChildren: () => FluxoModule, data: { title: 'Meu cadastro' } },
  { path: 'assinar', loadChildren: () => AssinaturaModule, data: { title: 'Meu cadastro' } },
  { path: 'formulario', loadChildren: () => FormularioModule, data: { title: 'Meu cadastro' } },
  { path: 'painel', loadChildren: () => PainelModule, data: { title: 'Meu painel' } },

  // {path: '', component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

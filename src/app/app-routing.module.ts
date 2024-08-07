import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssinarDocumentoComponent } from './assinatura/assinar-documento/assinar-documento.component';

const routes: Routes = [{
  path:'', component: AssinarDocumentoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

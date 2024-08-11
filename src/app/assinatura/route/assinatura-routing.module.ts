import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssinarDocumentoComponent } from '../assinar-documento/assinar-documento.component';

const routes: Routes = [
  { path: '', component: AssinarDocumentoComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class AssinaturaRoutingModule { }

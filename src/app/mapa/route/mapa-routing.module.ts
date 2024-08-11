import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerMapaComponent } from '../views/container-mapa/container-mapa.component';


const routes: Routes = [
  { path: '', component: ContainerMapaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class MapaRoutingModule { }

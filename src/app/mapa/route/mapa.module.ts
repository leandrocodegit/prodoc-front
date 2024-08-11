import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataMapaComponent } from '../views/data-mapa/data-mapa.component';
import { ContainerMapaComponent } from '../views/container-mapa/container-mapa.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_BOTTOM_SHEET_DEFAULT_OPTIONS } from '@angular/material/bottom-sheet';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@NgModule({
  declarations: [
    DataMapaComponent,
    ContainerMapaComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatBottomSheetModule
  ],
  exports: [
    DataMapaComponent,
    ContainerMapaComponent
  ],
  providers: [
    { provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ]
})
export class MapaModule { }

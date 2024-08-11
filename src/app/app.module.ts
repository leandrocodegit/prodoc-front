import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { TimelineModule } from 'primeng/timeline';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { FormularioModule } from './formularios/route/formulario-module.module';
import { UtilModule } from './util/route/util-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FluxoModule } from './fluxos/route/fluxo-module.module';
import { AssinaturaModule } from './assinatura/route/assinatura-module.module';
import { DataMapaComponent } from './mapa/views/data-mapa/data-mapa.component';
import { EnderecoComponent } from './formularios/views/componentes/endereco/endereco.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    TimelineModule,
    HttpClientModule,
    PdfViewerModule,
    ReactiveFormsModule,
    DragDropModule,
    MatDialogModule,
    FormularioModule,
    UtilModule,
    FluxoModule,
    AssinaturaModule
   ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }

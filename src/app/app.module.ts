import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimelineModule } from 'primeng/timeline';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FluxoModule } from './fluxos/route/fluxo-module.module';
import { AssinaturaModule } from './assinatura/route/assinatura-module.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PainelAssinaturaInternaComponent } from './painel/views/painel-assinatura-interna/painel-assinatura-interna.component';
import { MenuBarInternoComponent } from './menu/views/menu-bar-interno/menu-bar-interno.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarInternoComponent
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
    MatDialogModule,
    FluxoModule,
    AssinaturaModule,
    MatSlideToggleModule
  ],
  providers: [
    provideAnimationsAsync()
  ],

  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }

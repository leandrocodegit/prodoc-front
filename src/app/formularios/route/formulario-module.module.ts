import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioRoutingModule } from './formulario-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimelineModule } from 'primeng/timeline';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { InputFieldComponent } from '../views/componentes/input-field.component';
import { FormularioCustomizadoComponent } from '../views/formulario-customizado/formulario-customizado.component';
import { SelectFieldComponent } from '../views/componentes/select-field.component';
import { AdicionarCampoComponent } from '../views/adicionar-campo/adicionar-campo.component';
import { OpcaoSeletorCampoComponent } from '../views/adicionar-campo/opcao-campo.component';
import { IpuntTextoComponent } from '../views/ipunt-texto/ipunt-texto.component';
import { UtilModule } from '../../util/route/util-module.module';
import { CordenadasFieldComponent } from '../views/componentes/cordenadas-field.component';
import { MapaModule } from '../../mapa/route/mapa.module';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { EnderecoComponent } from '../views/componentes/endereco/endereco.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { provideNativeDateAdapter } from '@angular/material/core';
import { PainelPropriedadesFormularioComponent } from '../views/painel-propriedades-formulario/painel-propriedades-formulario.component';
import { CriarFormularioCustomizadoComponent } from '../views/criar-formulario-customizado/criar-formulario-customizado.component';
import { TabelaComponent } from '../views/componentes/tabela/tabela.component';
import { RadioFieldComponent } from '../views/componentes/radio-field.component';
import { VisaoFormularioComponent } from '../../util/visao-formulario/visao-formulario.component';


@NgModule({
  declarations: [
    FormularioCustomizadoComponent,
    InputFieldComponent,
    SelectFieldComponent,
    AdicionarCampoComponent,
    OpcaoSeletorCampoComponent,
    IpuntTextoComponent,
    CordenadasFieldComponent,
    EnderecoComponent,
    RadioFieldComponent,
    PainelPropriedadesFormularioComponent,
    CriarFormularioCustomizadoComponent,
    TabelaComponent,
    VisaoFormularioComponent
   ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    FormsModule,
    TimelineModule,
    PdfViewerModule,
    ReactiveFormsModule,
    DragDropModule,
    MatDialogModule,
    UtilModule,
    MapaModule,
    MatBottomSheetModule,
    MatSlideToggleModule,
    MatCheckboxModule,



  ],
  exports: [
    IpuntTextoComponent,
    InputFieldComponent,
    SelectFieldComponent,
    AdicionarCampoComponent,
    OpcaoSeletorCampoComponent,
    IpuntTextoComponent,
    CordenadasFieldComponent,
    EnderecoComponent,
    VisaoFormularioComponent
  ],
  providers: [provideNativeDateAdapter()]
})
export class FormularioModule { }

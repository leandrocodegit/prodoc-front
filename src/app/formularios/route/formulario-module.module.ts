import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioRoutingModule } from './formulario-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimelineModule } from 'primeng/timeline';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { InputFieldComponent } from '../views/componentes/input-field.component';
import { CheckboxFieldComponent } from '../views/componentes/checkbox-field.component';
import { FormularioCustomizadoComponent } from '../views/formulario-customizado/formulario-customizado.component';
import { SelectFieldComponent } from '../views/componentes/select-field.component';
import { AdicionarCampoComponent } from '../views/adicionar-campo/adicionar-campo.component';
import { OpcaoSeletorCampoComponent } from '../views/adicionar-campo/opcao-campo.component';
import { AreaFieldComponent } from '../views/componentes/area-field.component';
import { UploadComponent } from '../views/componentes/upload/upload.component';
import { FileFieldComponent } from '../views/componentes/file-field.component';
import { IpuntTextoComponent } from '../views/ipunt-texto/ipunt-texto.component';
import { UtilModule } from '../../util/route/util-module.module';
import { CordenadasFieldComponent } from '../views/componentes/cordenadas-field.component';
import { MapaModule } from '../../mapa/route/mapa.module';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { EnderecoComponent } from '../views/componentes/endereco/endereco.component';
import { VisualisarFormularioPreenchidoComponent } from '../views/visualisar-formulario-preenchido/visualisar-formulario-preenchido.component';


@NgModule({
  declarations: [
    FormularioCustomizadoComponent,
    InputFieldComponent,
    CheckboxFieldComponent,
    SelectFieldComponent,
    AdicionarCampoComponent,
    OpcaoSeletorCampoComponent,
    AreaFieldComponent,
    UploadComponent,
    FileFieldComponent,
    IpuntTextoComponent,
    CordenadasFieldComponent,
    EnderecoComponent,
    VisualisarFormularioPreenchidoComponent

  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    FormsModule,
    TimelineModule,
    HttpClientModule,
    PdfViewerModule,
    ReactiveFormsModule,
    DragDropModule,
    MatDialogModule,
    UtilModule,
    MapaModule,
    MatBottomSheetModule,

  ],
  exports:[
    VisualisarFormularioPreenchidoComponent
  ]
})
export class FormularioModule { }

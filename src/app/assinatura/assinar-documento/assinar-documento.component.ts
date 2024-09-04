import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DomSanitizer } from '@angular/platform-browser';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { PdfDocumentInfo } from 'ngx-extended-pdf-viewer';
import { PrimeIcons } from 'primeng/api';
import { PainelAssinaturaInternaComponent } from 'src/app/painel/views/painel-assinatura-interna/painel-assinatura-interna.component';
import { AssinaturaEscritaComponent } from '../assinatura-escrita/assinatura-escrita.component';
import { fabric } from 'fabric';


@Component({
  selector: 'app-assinar-documento',
  templateUrl: './assinar-documento.component.html',
  styleUrl: './assinar-documento.component.css'
})
export class AssinarDocumentoComponent implements OnInit {

  @ViewChild(PdfViewerComponent) private pdfComponent!: PdfViewerComponent;

etapa = '1'
public showWidgets = false;

avanca(etapa: string){
  this.etapa = etapa;
}
  
  
  isLinear = false;

  documentoSelecionado: any;
  totalPages: number | null = null;
  currentPage: number | null = null;
  pdfRead: boolean = false;
  pesquisa: string = '';
   pdf: any;
  page:number = 2
  intens:any[] = []
  texto?: string = undefined
  showAll = true;
  isOutlineShown = false;
  outline!: any[];

  documentos: any[] = [
   // { nome: 'Curriculo assinado', status: 'AGUARDANDO_ASSINATURA', fileName: 'assets/cv_assinado.pdf', date: '15/10/2020 10:30', icon: PrimeIcons.TIMES, color: '#d9d9d9' },
    { nome: 'Impugnação', status: 'AGUARDANDO_ASSINATURA', fileName: 'assets/1. Impugnação_Conder.pdf', date: '15/10/2020 10:30', icon: PrimeIcons.TIMES, color: '#d9d9d9' },
    { nome: 'Pedido de licenciamento', status: 'AGUARDANDO_ASSINATURA', fileName: 'assets/cv.pdf', date: '15/10/2020 10:30', icon: PrimeIcons.TIMES, color: '#d9d9d9' },
    { nome: 'Curriculo', status: 'AGUARDANDO_ASSINATURA', date: '15/10/2020 14:00', fileName: 'assets/proposta-spcine.pdf', icon: PrimeIcons.TIMES, color: '#d9d9d9' },
    { nome: 'Proposta spcine', status: 'AGUARDANDO_ASSINATURA', date: '15/10/2020 16:15', fileName: 'assets/cv.pdf', icon: PrimeIcons.TIMES, color: '#d9d9d9' }
  ];

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private sheet: MatBottomSheet) { }

  ngOnInit(): void {
    
    var canvas = new fabric.Canvas('signatureCanvas', {
      isDrawingMode: true
    });
    canvas.freeDrawingBrush.color = 'black';
    canvas.freeDrawingBrush.width = 4;
    

    this.documentoSelecionado = this.documentos[0]

 // document.addEventListener('selectionchange', this.onTextSelect.bind(this));
}

public onPagesLoaded(pdfViewer: any) {

}

navigateTo(destination: any) {
  this.pdfComponent.pdfLinkService.goToDestination(destination);
}

onTextSelect(event: any) {


}



  onTextLayerRendered(event: any) {
    const textLayer = event.source.textLayer;
    // Aquí podrías implementar la lógica para resaltar el texto deseado.
    // Por ejemplo, puedes buscar el texto específico en el `textLayer` y aplicarle un estilo CSS para marcarlo.
  }

  documentosAssinados() {
    return this.documentos.filter(doc => doc.status === 'ASSINADO').length
  }

  documentosPendentes() {
    return this.documentos.filter(doc => doc.status === 'AGUARDANDO_ASSINATURA').length
  }

  todosdocumentosAssinados(){
    if(this.documentoSelecionado)
      return false;
    return this.documentosPendentes.length == 0;
  }

 linkPesquisa(texto: string){
  this.pesquisa = texto
  this.search(this.pesquisa, true)
 }

  search(event: any, interna: boolean) {

    if(event.target && event.target.value){
      this.pesquisa = event.target.value
    }

    if(this.pesquisa.length > 30){
      this.pesquisa = this.pesquisa.substring(0,30)
    }
 this.pdfComponent.eventBus.dispatch('find', {
      query: this.pesquisa, type: 'again', caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true
    });

    if(!interna){
      this.intens = []
      if(this.texto && this.texto?.includes(this.normalizeText(this.pesquisa))){
        const regex = new RegExp(`${this.normalizeText(this.pesquisa)}.{30}`, 'gi');
        this.intens = this.texto.match(regex) || [];

      }
    }


    if(this.pesquisa === ''){
      this.intens = []
    }
   // this.totalPages = this.pdfComponent.pdfViewer.pagesCount
  }

  onPageRendered(event: any): void {
    this.pdf = event.source
    this.texto = undefined
    this.currentPage = event.pageNumber;
    if (this.currentPage === this.totalPages) {
      this.pdfRead = true;
    }

     this.pdfComponent.pdfViewer.getAllText().then(text => {
      if(text)
        this.texto = this.normalizeText(text);

    })


  }

  normalizeText(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase().replace('\n',' ').replace(/\s+/g, ' ');;
  }

  assinar() {

    if (this.documentoSelecionado) {
      this.documentoSelecionado.status = 'ASSINADO'
      this.documentoSelecionado.icon = PrimeIcons.CHECK
      this.documentoSelecionado.color = '#41d287'
      this.documentoSelecionado = this.documentos.find((doc: any) => doc.status === 'AGUARDANDO_ASSINATURA')
    }

    this.sheet.open(AssinaturaEscritaComponent)

  }



}

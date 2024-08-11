import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-assinatura',
  templateUrl: './assinatura.component.html',
  styleUrl: './assinatura.component.css'
})
export class AssinaturaComponent {

  @ViewChild(PdfViewerComponent) private pdfComponent!: PdfViewerComponent;

  documentoSelecionado: any;
  totalPages: number | null = null;
  currentPage: number | null = null;
  pdfRead: boolean = false;
  pesquisa: string = '';
   pdf: any;
  page:number = 2
  intens:any[] = []
  texto?: string = undefined



  documentos: any[] = [
    { nome: 'Pedido de licenciamento', status: 'AGUARDANDO_ASSINATURA', fileName: 'assets/cv.pdf', date: '15/10/2020 10:30', icon: PrimeIcons.TIMES, color: '#ffb500', image: 'game-controller.jpg' },
    { nome: 'Curriculo', status: 'AGUARDANDO_ASSINATURA', date: '15/10/2020 14:00', fileName: 'assets/proposta-spcine.pdf', icon: PrimeIcons.TIMES, color: '#ffb500' },
    { nome: 'Proposta spcine', status: 'AGUARDANDO_ASSINATURA', date: '15/10/2020 16:15', fileName: 'assets/cv.pdf', icon: PrimeIcons.TIMES, color: '#ffb500' }
  ];

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.documentoSelecionado = this.documentos[1]


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
    this.totalPages = this.pdfComponent.pdfViewer.pagesCount
  }

  onPagesLoaded(event: any): void {
    this.totalPages = event.source;
  }

  onPageRendered(event: any): void {
    this.pdf = event.source
    this.texto = undefined
    this.currentPage = event.pageNumber;
    if (this.currentPage === this.totalPages) {
      this.pdfRead = true;
      console.log('PDF foi lido!');
    }

     this.pdfComponent.pdfViewer.getAllText().then(text => {

      if(text)
        this.texto = this.normalizeText(text);

    })
  }

  normalizeText(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase().replaceAll('\n',' ').replaceAll(/\s+/g, ' ');;
  }

  assinar() {

    if (this.documentoSelecionado) {
      this.documentoSelecionado.status = 'ASSINADO'
      this.documentoSelecionado.icon = PrimeIcons.CHECK
      this.documentoSelecionado.color = '#41d287'
      this.documentoSelecionado = this.documentos.find((doc: any) => doc.status === 'AGUARDANDO_ASSINATURA')
    }

  }



}

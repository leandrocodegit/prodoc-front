import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PDFDocumentProxy, PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-visualizar-pdf',
  templateUrl: './visualizar-pdf.component.html',
  styleUrl: './visualizar-pdf.component.css'
})
export class VisualizarPdfComponent implements OnInit {

  @ViewChild(PdfViewerComponent) private pdfComponent!: PdfViewerComponent;

  @Input() url: string = '/assets/cv.pdf';
  @Input() height: string = '100vh'


  documentoSelecionado: any;
  totalPages: number | null = null;
  currentPage: number | null = null;
  pesquisa: string = '';
  itens: any[] = []
  texto?: string = undefined;
  pdfRead: boolean = false;
  pdf: any;


  ngOnInit(): void {


  }

  onPageRendered(event: any): void {



    if (this.pdfComponent && this.pdfComponent.pdfViewer)
      this.pdfComponent.pdfViewer.getAllText().then(text => {

        if (text)
          this.texto = this.normalizeText(text);

      })


  }

  onPdfLoadComplete(pdf: PDFDocumentProxy) {

    var delay = setInterval(() => {
      this.pdfComponent.pdfViewer.getAllText().then(text => {

        if (text)
          this.texto = this.normalizeText(text);
        console.log('Texto', this.texto);


      })
      clearInterval(delay)
    }, 3000);

  }

  search(event: any, interna: boolean) {

    if (event.target && event.target.value) {
      this.pesquisa = event.target.value;
    }
    else if(!interna) {
      this.pesquisa = '';
    }

    if (this.pesquisa.length > 30) {
      this.pesquisa = this.pesquisa.substring(0, 30)
    }
    this.pdfComponent.eventBus.dispatch('find', {
      query: this.pesquisa, type: 'again', caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true
    });

    if (!interna) {
      this.itens = []
      if (this.texto && this.texto?.includes(this.normalizeText(this.pesquisa))) {
        const regex = new RegExp(`${this.normalizeText(this.pesquisa)}.{30}`, 'gi');
        this.itens = this.texto.match(regex) || [];
      }
    }

    if (this.pesquisa === '') {
      this.itens = [];
    }
  }

  normalizeText(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase().replace('\n', ' ').replace(/\s+/g, ' ');;
  }

  linkPesquisa(texto: string) {
    this.pesquisa = texto
    this.search(this.pesquisa, true)
  }
}

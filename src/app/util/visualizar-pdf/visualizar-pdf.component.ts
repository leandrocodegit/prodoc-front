import { Component, Input, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-visualizar-pdf',
  templateUrl: './visualizar-pdf.component.html',
  styleUrl: './visualizar-pdf.component.css'
})
export class VisualizarPdfComponent {

  @ViewChild(PdfViewerComponent) private pdfComponent!: PdfViewerComponent;

  @Input() url: string = '';
  @Input() height: string = '99vh'


  documentoSelecionado: any;
  totalPages: number | null = null;
  currentPage: number | null = null;
  pesquisa: string = '';
  intens:any[] = []
  texto?: string = undefined

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

  normalizeText(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase().replace('\n',' ').replace(/\s+/g, ' ');;
  }

}

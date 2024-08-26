import { Component, Input } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-painel-assinatura-interna',
  templateUrl: './painel-assinatura-interna.component.html',
  styleUrl: './painel-assinatura-interna.component.css'
})
export class PainelAssinaturaInternaComponent {

  @Input() documentos: any[] = [];
  protected arquivo: any;
  private paginaAtual = 0;
  protected files: any[] = [];

  ngOnInit(): void {
     this.documentos.push('cv.pdf')
    if (this.documentos && this.documentos.length) {
      this.documentos.forEach(doc => {
        this.files.push(
          { id: this.files.length + 1, nome: 'Impugnação', status: 'PENDENTE', fileName: `/assets/${doc}`, date: '15/10/2020 10:30', icon: PrimeIcons.TIMES, color: '#d9d9d9' }
        )
      })
      this.arquivo = this.files[0]
    }


  }

  selecionarTarefa(etapa: any) {
    this.arquivo = etapa;
  }

  voltar() {
    if (this.documentos && this.documentos.length) {
      if (this.paginaAtual > 0) {
        this.paginaAtual--;
      } else {
        this.paginaAtual = this.documentos.length - 1;
      }
      this.arquivo = this.files[this.paginaAtual];
    }
  }

  avancar() {
    if (this.documentos && this.documentos.length) {
      if (this.documentos.length - 1 > this.paginaAtual) {
        this.paginaAtual++;
      } else {
        this.paginaAtual = 0;
      }
      this.arquivo = this.files[this.paginaAtual];
    }
  }

  documento() {
    if (this.documentos && this.documentos.length)
      return 'assets/' + this.documentos[0]
    console.log(this.documentos);

  }

  assinar(aprovado: boolean) {
    if (this.arquivo) {
      this.arquivo.status = status ? 'APROVADO' : 'REPROVADO'
      this.arquivo.icon = aprovado ? PrimeIcons.CHECK : PrimeIcons.TIMES
      this.arquivo.color = aprovado ? '#41d287' : '#ff5061'
    }
    console.log(this.files);

  }

}


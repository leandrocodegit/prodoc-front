import { Component, Input, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FiedlService } from '../../../formularios/services/fiedl-service.service';
import { Etapa } from '../../models/Etapa.model';

@Component({
  selector: 'app-descricao-fluxo-etapas',
  templateUrl: './descricao-fluxo-etapas.component.html',
  styleUrl: './descricao-fluxo-etapas.component.css'
})
export class DescricaoFluxoEtapasComponent implements OnInit {

  @Input() etapas: Etapa[] = [];
  protected fluxos: any[] = [];

  constructor(
    private fiedlService: FiedlService
  ) {

    fiedlService.eventoFormulario.subscribe(() => {
      this.criarFluxoEtapas()
    })

  }

  ngOnInit(): void {
    this.criarFluxoEtapas()
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      event.container.data.forEach((etapa, index) => {
        etapa.posicao = index + 1;
      })

    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  criarFluxoEtapas() {
    this.fluxos = [];
    this.fluxos.push(
      { nome: 'Inicio do processo', descricao: '', icone: { icon: PrimeIcons.PLAY, color: '#59697e', tipo: 0 } }
    )
    this.etapas.forEach(etapa => {
      if (etapa.tipo_id != 2) {
        this.fluxos.push(
          { nome: etapa.tipo.descricao, descricao: this.preparaDetalhes(etapa), icone: this.getIcone(etapa.tipo.id), tipo: etapa.tipo_id }
        )
      }
      if (etapa.eventos.length) {
        etapa.eventos.forEach(evento => {
          var descricao = `${this.listaDetalhes(0, evento?.itens || [])}`;
          if (evento.ativaCondicional)
            descricao = `${descricao}, se o campo <span class="text-warning">${evento.condicional?.campo}</span>  <span class="text-success">${evento.condicional?.condicao}</span>  <span class="text-warning">${evento.condicional?.campo}</span>`
          this.fluxos.push(
            { nome: evento.descricao, descricao: descricao, icone: this.getIcone(2), tipo: 2 }
          )
        });
      }
    })
    this.fluxos.push(
      { nome: 'Fim do processo', descricao: '', icone: { icon: PrimeIcons.STOP, color: '#59697e', tipo: 0 } }
    )
    return this.fluxos;
  }

  private getIcone(tipo: number): PrimeIcons {
    switch (tipo) {
      case 1: return { icon: PrimeIcons.LOCK, color: '#5cb7ff' };
      case 2: return { icon: PrimeIcons.CODE, color: '#ff935c' };
      case 3: return { icon: PrimeIcons.CHECK, color: '#5cb7ff' };
      case 4: return { icon: PrimeIcons.FILE_PDF, color: '#5cb7ff' };
      default: return { icon: PrimeIcons.CHEVRON_UP, color: '#7cdaf5' };
    }

  }

  preparaDetalhes(etapa: Etapa) {

    if (etapa.tipo_id == 1)
      return this.listaDetalhes(1, etapa.assinantes);
    if (etapa.evento_id == 3)
      return this.listaDetalhes(3, etapa.conferencias);
    if (etapa.tipo_id == 4)
      return this.listaDetalhes(4, etapa.formularios);

    return '';
  }

  listaDetalhes(tipo: number, itens: any[]) {

    if (itens.length) {
      if (tipo == 1)
        return `${this.plural(itens.length, 'O')}
    ${this.plural(itens.length, 'formulário')} ${this.plural(itens.length, 'deve')} ser ${this.plural(itens.length, 'assinado')} por  <span class="text-success">
    ${this.formatarTexto(itens.map(item => item.descricao)
            .reduce((a, b, index) => a + (index + 1 === itens.length && itens.length > 1 ? ' e ' : ', ') + b))}</span>.`;
      if (tipo == 3)
        return `<span class="text-success">${this.formatarTexto(itens.map(item => item.descricao)
          .reduce((a, b, index) => a + (index + 1 === itens.length && itens.length > 1 ? ' e ' : ', ') + b))}</span> faz a conferência.`;
      if (tipo == 4 && itens.length)
        return `Envio ${this.plural(itens.length, 'do')} ${this.plural(itens.length, 'formulário')}  <span class="text-success">
      ${this.formatarTexto(itens.map(item => item.descricao)
          .reduce((a, b, index) => a + (index + 1 === itens.length && itens.length > 1 ? ' e ' : ', ') + b))}</span>.`;

      return `<span class="text-success">${this.formatarTexto(itens.map(item => item.descricao)
        .reduce((a, b, index) => a + (index + 1 === itens.length && itens.length > 1 ? ' e ' : ', ') + b))}</span>`;
    }
    return '';
  }

  formatarTexto(texto: string){
    if(texto.length > 1)
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
  return '';
  }

  private plural(tamanho: number, texto: string) {
    if (texto === 'deve') {
      if (tamanho > 1)
        return texto + 'm'
      return texto
    }
    if (tamanho > 1)
      return texto + 's'
    return texto
  }

}

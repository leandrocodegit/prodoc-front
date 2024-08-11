import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabela-etapa',
  templateUrl: './tabela-etapa.component.html',
  styleUrls: ['./tabela-etapa.component.css']
})
export class TabelaEtapaComponent implements OnInit {

  @Input() titulo = '';
  @Input() itens: any[] = [];
  @Input() viewAcoes = false;
  @Output() itemEmit = new EventEmitter();
  @Output() addEmit = new EventEmitter();
  @Output() editEmit = new EventEmitter();
  @Output() removeEmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selecionarIten(item: any){
    item.ativo = !item.ativo
    this.itemEmit.emit()
  }

  adicionar(){
    this.addEmit.emit()
  }

  editarIten(item: any){
    this.editEmit.emit(item)
  }

  removeIten(item: any){
    this.removeEmit.emit(item)
  }
}

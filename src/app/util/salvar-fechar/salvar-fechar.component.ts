import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-salvar-fechar',
  templateUrl: './salvar-fechar.component.html',
  styleUrls: ['./salvar-fechar.component.css']
})
export class SalvarFecharComponent implements OnInit {

  @Input() bloquear = false;
  @Input() salvar = true;
  @Input() remover = false;
  @Output() fecharEmit = new EventEmitter();
  @Output() salvarEmit = new EventEmitter();
  @Output() removerEmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fecharEvent() {
    this.fecharEmit.emit()
  }

  salvarEvent() {
    this.salvarEmit.emit()
  }

  removerEvent() {
    this.removerEmit.emit()
  }


}

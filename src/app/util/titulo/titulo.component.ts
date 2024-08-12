import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.css'
})
export class TituloComponent {

  @Input() titulo = ''
  @Input() icon = ''
  @Output() eventEmit = new EventEmitter();

  novoCampo(){
    this.eventEmit.emit()
  }

}

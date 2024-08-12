import { Component, Input } from '@angular/core';
import { FiedlService } from '../../services/fiedl-service.service';

@Component({
  selector: 'app-visualisar-formulario-preenchido',
  templateUrl: './visualisar-formulario-preenchido.component.html',
  styleUrl: './visualisar-formulario-preenchido.component.css'
})
export class VisualisarFormularioPreenchidoComponent {

  @Input() fields: any[] = [];

  constructor(
    private fiedlService: FiedlService
  ) {
    this.fields = fiedlService.listaFilds()
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { TarefaServiceService } from '../../services/tarefa-service.service';

@Component({
  selector: 'app-painel-validacao-formulario',
  templateUrl: './painel-validacao-formulario.component.html',
  styleUrl: './painel-validacao-formulario.component.css'
})
export class PainelValidacaoFormularioComponent implements OnInit {

  @Input() fields: any[] = [];

  constructor(
    private tarefaService: TarefaServiceService
  ){}

  ngOnInit(): void {
      this.tarefaService.formularioProcesso('').subscribe(response => {
         

        this.fields = response.components
        console.log(this.fields);

      })
  }

}

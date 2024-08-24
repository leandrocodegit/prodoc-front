import { Component, Input, OnInit } from '@angular/core';
import { TarefaServiceService } from '../../services/tarefa-service.service';
import { Field } from 'src/app/formularios/models/Field.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-painel-tarefas',
  templateUrl: './painel-tarefas.component.html',
  styleUrl: './painel-tarefas.component.css'
})
export class PainelTarefasComponent implements OnInit {

  protected fields: Field[] = [];
  protected tarefas: any[] = []
  protected tarefaSelecionada: any;
  protected variaveis: any
  protected tab = new FormControl(2);
  protected documentos: any[];
  protected arquivo = '';
  private paginaAtual = 0;

  constructor(
    private tarefaServiceService: TarefaServiceService
  ) { }

  ngOnInit(): void {
    this.tarefaServiceService.listaTarefas().subscribe(response => {
      this.tarefas = response;
    })
  }

  selecionarTarefa(tarefa: any) {


    this.tarefaSelecionada = tarefa;
    this.tarefaServiceService.reloadViewer.emit(tarefa)

    if (tarefa.id) {
      this.tarefaServiceService.variaveisTarefa(tarefa.id).subscribe(response => {
        this.variaveis = response;

        if (this.variaveis && this.variaveis.tipoAcao) {
          var delay = setInterval(() => {
           // this.tab.setValue(0);
            clearInterval(delay)
          }, 500);
        }



        if (this.variaveis && this.variaveis.documentos && this.variaveis.documentos.value.length) {
          this.documentos = this.variaveis.documentos.value
          this.arquivo = `assets/${this.documentos[0]}`
        }

      })
    }

    if (tarefa.camundaFormRef) {
      this.tarefaServiceService.formularioTarefa(tarefa.id).subscribe(response => {
        this.fields = response.components
        console.log("Fields", this.fields);

      }, fail => {

      })
    } else {
      this.fields = []
    }


  }

  exibeTab(tipo: string) {
    return (this.variaveis && this.variaveis.tipoAcao && this.variaveis.tipoAcao.value == tipo)
  }

  selecionarTab(event: number) {

  }



  documento() {
    if (this.documentos && this.documentos.length)
      return 'assets/' + this.documentos[0]
    console.log(this.documentos);

  }

}

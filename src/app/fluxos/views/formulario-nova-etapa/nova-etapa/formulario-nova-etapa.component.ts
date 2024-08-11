import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FiedlService } from '../../../../formularios/services/fiedl-service.service';
import { Field } from '../../../../formularios/models/Field.model';
import { FormularioEventoComponent } from '../../formulario-evento/formulario-evento/formulario-evento.component';
import { Etapa } from '../../../models/Etapa.model';
import { Evento } from '../../../models/Evento';

@Component({
  selector: 'app-formulario-nova-etapa',
  templateUrl: './formulario-nova-etapa.component.html',
  styleUrls: ['./formulario-nova-etapa.component.css']
})
export class FormularioNovaEtapaComponent implements OnInit {

  toppings = new FormControl('');
  formulariosSelect = new FormControl('');
  @Input() etapa: Etapa = new Etapa();
  @Input() etapas: Etapa[] = [];
  @Input() fields: any[] = [];


  protected tipos = [
    { id: 1, descricao: 'Assinatura' },
    { id: 2, descricao: 'Evento' },
    { id: 3, descricao: 'Enviar para conferência' },
    { id: 4, descricao: 'Preencher forumlário' },

  ]
  protected assinantes = [
    { id: 1, descricao: 'Diretoria', ativo: false },
    { id: 2, descricao: 'Requerente', ativo: false },
    { id: 3, descricao: 'Setor', ativo: false },
  ]

  protected setores = [
    { id: 1, descricao: 'Setor 1', ativo: false },
    { id: 2, descricao: 'Setor 2', ativo: false },
  ]

  protected formularios = [
    { id: 1, descricao: 'Licença ambiental', ativo: false, template: {}, assinantes: {} },
    { id: 2, descricao: 'Pedido de construção', ativo: false, template: {}, assinantes: {} }
  ]

  protected tags = [
    { id: 1, descricao: 'Aguardando assinatura', ativo: false, template: {}, assinantes: {} },
    { id: 2, descricao: 'Pendencia de contrado', ativo: false, template: {}, assinantes: {} }
  ]



  constructor(
    private fiedlService: FiedlService,
    private router: Router,
    private dialog: MatDialog
  ) {

    if (this.etapa) {
      this.etapa = new Etapa()
    }
  }

  ngOnInit(): void {

    this.fields = this.fiedlService.listaFilds();
    this.formularios[0].template = this.fields;
    this.formularios[1].template = this.fields.slice(5,7)
  }

  salvarEvent(): void {
    this.etapa.tipo = this.tipos.find(tipo => tipo.id == this.etapa.tipo_id);


    this.etapa.formularios = this.formularios.filter(fil => fil.ativo == true)
    this.etapa.assinantes = this.assinantes.filter(fil => fil.ativo == true)
    this.etapa.conferencias = this.setores.filter(fil => fil.ativo == true)

    if(this.etapas.length && this.etapa.id != 0){
      if(this.etapas.find(et => et.id === this.etapa.id)){
        this.etapa = this.etapas.find(et => et.id === this.etapa.id) as Etapa;
      }else{
        this.etapa.id = this.etapas.length;
        this.etapa.posicao = this.etapas.length + 1;
        this.etapas.push(this.etapa)
      }
    }else{
      this.etapa.id = this.etapas.length;
      this.etapa.posicao = this.etapas.length + 1;
      this.etapas.push(this.etapa)
    }

    this.etapa = new Etapa();

    this.fiedlService.eventoFormulario.emit()
  }

  selecionaTipo() {

  }

  listaFormularios(){
    var itens:any [] = [];
    this.etapas.forEach(etapa => {
      etapa.formularios.forEach(formulario => {
        if(!itens.find(it => it.id == formulario.id))
          itens.push(formulario);
    })})
    return itens;
  }

  listaVariaveis(){

    var itens:Field [] = [];

    return itens;
  }

  editarEvento(evento: Evento){
    this.adicionarEvento(evento)
  }

  adicionarEvento(evento?: Evento){
  var retorno = this.dialog.open(FormularioEventoComponent, {
      data: {
        etapa: this.etapa,
        evento: evento
      }
    })

    retorno.afterClosed().subscribe(data => {
      if(data){

      }
    })
  }

  novoEvento(){
      this.router.navigate(['formulario'])
  }

  adicionaFormulario(formulario: any) {
    this.etapa.formularios = this.formularios.filter(fil => fil.ativo == true)
  }

  adicionaFormularioAssinante(formulario: any) {
    formulario.assinantes = this.etapa.assinantes
  }

  adicionaAssinate(assinante: any) {
    if (!this.etapa.assinantes.find(ass => ass.id == assinante.id)) {
      this.etapa.assinantes.push(assinante)
    }
  }

  adicionaEvento(setor: any) {

  }

  adicionaConferencia(setor: any) {
if (!this.etapa.conferencias.find(ass => ass.id == setor.id)) {
      this.etapa.conferencias.push(setor)
    }
  }

  fecharEvent() {
    this.etapa = new Etapa()
  }

}

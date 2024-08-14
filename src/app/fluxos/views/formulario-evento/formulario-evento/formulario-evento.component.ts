import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Field } from '../../../../formularios/models/Field.model';
import { FiedlService } from '../../../../formularios/services/fiedl-service.service';
import { Evento } from '../../../models/Evento';
import { Etapa } from '../../../models/Etapa.model';

@Component({
  selector: 'app-formulario-evento',
  templateUrl: './formulario-evento.component.html',
  styleUrls: ['./formulario-evento.component.css']
})
export class FormularioEventoComponent implements OnInit {

  toppings = new FormControl('');
  formulariosSelect = new FormControl('');
  protected evento?: Evento;
  @Input() etapa!: Etapa;
  @Input() etapas: Etapa[] = [];
  @Input() fields: any[] = [];
  @Input() setores: any[] = [];
  @Input() assinantes: any[] = [];
  @Input() formularios: any[] = [];
  @Input() tags: any[] = [];
  @Output() salvarEmit = new EventEmitter();

  protected tipoEvento?: any;

  @Input() eventos: Evento[] =
    [
      { id: 1, descricao: 'Adicionar tag', ativaCondicional: false, ativo: true, remover: false, condicional: undefined, etapa: undefined, etapa_id: 0, itens: [] },
      { id: 2, descricao: 'Mudar setor responsavel', ativaCondicional: false, ativo: true, remover: false, condicional: undefined, etapa: undefined, etapa_id: 0, itens: [] },
      { id: 3, descricao: 'Enviar email', ativo: true, ativaCondicional: false, remover: false, condicional: undefined, etapa: undefined, etapa_id: 0, itens: [] },
      { id: 3, descricao: 'Desativar etapa', ativo: true, ativaCondicional: false, remover: false, condicional: undefined, etapa: undefined, etapa_id: 0, itens: [] },
      { id: 4, descricao: 'Enviar para confeência', ativo: true, ativaCondicional: false, remover: false, condicional: undefined, etapa: undefined, etapa_id: 0, itens: [] },

    ];

  @Input() condicionais: any[] =
    [
      { id: 1, descricao: 'Formulário' },
      { id: 2, descricao: 'Assinatura' }
    ];

  constructor(
    private fieldService: FiedlService,
    //public dialogRef: MatDialogRef<FormularioEventoComponent>,
    //@Inject(MAT_DIALOG_DATA) private data: any
  ) {
    //this.etapa = data.etapa;
    //this.evento = data.evento;

    if(this.evento){
      this.tipoEvento = this.evento.id
    }
  }

  ngOnInit(): void {

    if (!this.evento)
      this.evento = new Evento()

    this.assinantes = [
      { id: 1, descricao: 'Diretoria', ativo: false },
      { id: 2, descricao: 'Requerente', ativo: false },
      { id: 3, descricao: 'Setor', ativo: false },
    ]

    this.setores = [
      { id: 1, descricao: 'Setor 1', ativo: false },
      { id: 2, descricao: 'Setor 2', ativo: false },
    ]

    this.formularios = [
      { id: 1, descricao: 'Licença ambiental', ativo: false, template: {}, assinantes: {} },
      { id: 2, descricao: 'Pedido de construção', ativo: false, template: {}, assinantes: {} }
    ]

    this.tags = [
      { id: 1, descricao: 'Aguardando assinatura', ativo: false, template: {}, assinantes: {} },
      { id: 2, descricao: 'Pendencia de contrado', ativo: false, template: {}, assinantes: {} }
    ]

  }

  listaEtapas() {
    return this.etapas.filter(it => it.tipo_id != 2);
  }

  listaFormularios() {
    var itens: any[] = [];
    this.etapas.forEach(etapa => {
      etapa.formularios.forEach(formulario => {
        if (!itens.find(it => it.id == formulario.id))
          itens.push(formulario);
      })
    })
    return itens;
  }

  adicionaSetor() {
    if(this.evento)
      this.evento.itens = this.setores.filter(fil => fil.ativo == true)
  }

  adicionaConferencia() {
    if(this.evento)
      this.evento.itens = this.setores.filter(fil => fil.ativo == true)
  }

  adicionaTag() {
    if(this.evento)
      this.evento.itens = this.tags.filter(fil => fil.ativo == true)
  }

  adicionaFormulario(formulario: any) {
    if(this.evento)
      this.evento.itens = this.formularios.filter(fil => fil.ativo == true)
  }

  doTipoAssinatura() {
    return this.etapa?.tipo_id == 1;
  }

  doTipoFormulario() {
    return this.etapa?.tipo_id == 4;
  }

  listaVariaveis() {

    var itens: Field[] = [];

    return itens;
  }



  adicionaFormularioAssinante(formulario: any) {
    formulario.assinantes = this.etapa.assinantes
  }

  adicionaAssinate(assinante: any) {
    if (!this.etapa.assinantes.find(ass => ass.id == assinante.id)) {
      this.etapa.assinantes.push(assinante)
    }
  }

  inicializaCondicional() {

  }

  fecharEvent() {
    //this.dialogRef.close()
  }

  salvarEvent() {

    if (this.evento) {
      if (this.tipoEvento && this.evento.id == 0) {
        var evt = this.eventos.find(evt => evt.id == this.evento?.id)
        if(evt){
          this.evento.id = evt.id;
          this.evento.descricao = evt.descricao;
        }

      }


      if(!this.etapa.eventos.find(evt => evt.id == this.evento?.id)){
        this.etapa.eventos.push(this.evento)
      }


      this.salvarEmit.emit(this.evento)
     // this.dialogRef.close()
      this.fieldService.eventoFormulario.emit()
    }
  }


}

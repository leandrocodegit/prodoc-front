import { Component, Input, OnInit } from '@angular/core';
import { Field } from '../../../../formularios/models/Field.model';
import { Etapa } from '../../../models/Etapa.model';
import { Evento } from '../../../models/Evento';
import { Condicional } from '../../../models/Condicional';


@Component({
  selector: 'app-condicional-formulario',
  templateUrl: './condicional-formulario.component.html',
  styleUrls: ['./condicional-formulario.component.css']
})
export class CondicionalFormularioComponent implements OnInit {

  @Input() etapa?: Etapa;
  @Input() evento?: Evento;
  @Input() etapas: Etapa[] = [];
  @Input() fields: any[] = [];
  @Input() setores: any[] = [];
  @Input() assinantes: any[] = [];
  @Input() formularios: any[] = [];
  @Input() tags: any[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.etapa)
      if (this.evento && !this.evento.condicional) {
        this.evento.condicional = new Condicional()
      }
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

  listaVariaveis() {

    var itens: Field[] = [];
    this.etapa?.formularios.forEach(formulario => {
      if (formulario.template && formulario.template.length)
        formulario.template.forEach((item: Field) => {
          itens.push(item);
        });
    })
    return itens;
  }

}

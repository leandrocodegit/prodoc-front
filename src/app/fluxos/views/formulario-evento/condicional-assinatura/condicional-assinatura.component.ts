import { Component, Input, OnInit } from '@angular/core';
import { Etapa } from '../../../models/Etapa.model';
import { Evento } from '../../../models/Evento';
import { Field } from '../../../../formularios/models/Field.model';

@Component({
  selector: 'app-condicional-assinatura',
  templateUrl: './condicional-assinatura.component.html',
  styleUrls: ['./condicional-assinatura.component.css']
})
export class CondicionalAssinaturaComponent implements OnInit {

  @Input() etapa: Etapa = new Etapa();
  @Input() evento?: Evento;
  @Input() etapas: Etapa[] = [];
  @Input() fields: any[] = [];
  @Input() setores: any[] = [];
  @Input() assinantes: any[] = [];
  @Input() formularios: any[] = [];
  @Input() tags: any[] = [];

  constructor() { }

  ngOnInit(): void {
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

}

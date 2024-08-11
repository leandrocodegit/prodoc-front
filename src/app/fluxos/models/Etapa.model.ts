import { Evento } from "./Evento";

export class Etapa {
  id: number;
  posicao: number;
  tipo_id: number;
  tipo: any;
  formularios: any[];
  assinantes: any[];
  conferencias: any[];
  eventos: Evento[];
  evento_id: number;

  constructor(
    id = 0,
    posicao = 0,
    tipo_id = 0,
    tipo = {},
    formularios = [],
    assinantes = [],
    conferencias = [],
    eventos = [],
    evento_id = 0
  ) {
    this.id = id;
    this.posicao = posicao;
    this.tipo_id = tipo_id;
    this.tipo = tipo;
    this.formularios = formularios;
    this.assinantes = assinantes;
    this.conferencias = conferencias;
    this.eventos = eventos;
    this.evento_id = evento_id;
  }
}

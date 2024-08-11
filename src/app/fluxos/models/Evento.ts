import { Condicional } from "./Condicional";
import { Etapa } from "./Etapa.model";

export class Evento {
  id: number;
  descricao: string;
  condicional?: Condicional;
  ativaCondicional: boolean;
  ativo: boolean;
  remover: boolean;
  etapa?: Etapa;
  etapa_id: number;
  itens: ItemEvento[]

  constructor(
    id = 0,
    descricao = '',
    ativaCondicional = false,
    ativo = false,
    condicional = undefined,
    remover = false,
    etapa = undefined,
    etapa_id = 0,
    itens = []
  ) {
    this.id = id;
    this.descricao = descricao;
    this.condicional = condicional;
    this.ativaCondicional = ativaCondicional;
    this.ativo = ativo;
    this.remover = remover;
    this.etapa = etapa;
    this.etapa_id = etapa_id;
    this.itens = itens
  }
}

export class ItemEvento {
  id: number;
  descricao: string
  ativo: boolean;

  constructor(
    id = 0,
    descricao = '',
    ativo = false
  ) {
    this.id = id;
    this.descricao = descricao;
    this.ativo = ativo;
  }
}


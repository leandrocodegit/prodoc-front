export class Condicional {
  id: number;
  evento_id: number;
  ativo: boolean;
  formulario: any;
  condicao: string;
  campo: string;
  comparacao: string;
  acao: string;

  constructor(
    id = 0,
    evento_id = 0,
    ativo = false,
    formulario = {},
    condicao = 'se',
    campo = '',
    comparacao = '',
    acao = ''
  ) {
    this.id = id;
    this.evento_id = evento_id;
    this.ativo = ativo;
    this.formulario = formulario;
    this.condicao = condicao;
    this.campo = campo;
    this.comparacao = comparacao;
    this.acao = acao;
  }
}

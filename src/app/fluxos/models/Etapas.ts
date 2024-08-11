import { Etapa } from "./Etapa.model";

 export const ETAPAS: Etapa[] = [
  {
      "id": 0,
      "posicao": 1,
      "tipo_id": 4,
      "tipo": {
          "id": 4,
          "descricao": "Preencher forumlário"
      },
      "formularios": [
          {
              "id": 1,
              "descricao": "Licença ambiental",
              "ativo": true,
              "template": [
                  {
                      "id": 7,
                      "type": "file",
                      "label": "Escritura",
                      "name": "escritura",
                      "pattern": "",
                      "value": "",
                      "options": [
                          "pdf",
                          "imagem",
                          "office",
                          "video"
                      ],
                      "multiple": false,
                      "required": true,
                      "active": true
                  },
                  {
                      "id": 7,
                      "type": "file",
                      "label": "Escritura multipla",
                      "name": "escritura",
                      "pattern": "",
                      "value": "",
                      "options": [
                          "pdf",
                          "office"
                      ],
                      "multiple": true,
                      "required": true,
                      "active": true
                  },
                  {
                      "id": 1,
                      "type": "text",
                      "label": "Nome",
                      "name": "nome",
                      "options": [],
                      "pattern": "",
                      "multiple": false,
                      "required": true,
                      "active": true
                  },
                  {
                      "id": 2,
                      "type": "text",
                      "label": "Sobrenome",
                      "name": "sobrenome",
                      "value": "",
                      "pattern": "",
                      "options": [],
                      "multiple": false,
                      "required": true,
                      "active": true
                  },
                  {
                      "id": 3,
                      "type": "number",
                      "label": "Idade",
                      "name": "idade",
                      "value": "",
                      "pattern": "",
                      "options": [],
                      "multiple": false,
                      "required": true,
                      "active": true
                  },
                  {
                      "id": 4,
                      "type": "checkbox",
                      "label": "Verdadeiro",
                      "name": "verdadeiro",
                      "value": "true",
                      "pattern": "",
                      "options": [],
                      "multiple": false,
                      "required": true,
                      "active": true
                  },
                  {
                      "id": 5,
                      "type": "select",
                      "label": "Estado",
                      "name": "estado",
                      "value": "",
                      "options": [
                          "SP",
                          "MG"
                      ],
                      "pattern": "",
                      "multiple": false,
                      "required": true,
                      "active": true
                  },
                  {
                      "id": 6,
                      "type": "textarea",
                      "label": "Observações",
                      "name": "observacao",
                      "value": "",
                      "options": [],
                      "pattern": "",
                      "multiple": false,
                      "required": true,
                      "active": true
                  }
              ],
              "assinantes": {}
          },
          {
              "id": 2,
              "descricao": "Pedido de construção",
              "ativo": true,
              "template": [
                  {
                      "id": 4,
                      "type": "checkbox",
                      "label": "Verdadeiro",
                      "name": "verdadeiro",
                      "value": "true",
                      "pattern": "",
                      "options": [],
                      "multiple": false,
                      "required": true,
                      "active": true
                  },
                  {
                      "id": 5,
                      "type": "select",
                      "label": "Estado",
                      "name": "estado",
                      "value": "",
                      "options": [
                          "SP",
                          "MG"
                      ],
                      "pattern": "",
                      "multiple": false,
                      "required": true,
                      "active": true
                  }
              ],
              "assinantes": {}
          }
      ],
      "assinantes": [],
      "conferencias": [],
      "eventos": [
          {
              "id": 1,
              "descricao": "Adicionar tag",
              "ativaCondicional": true,
              "ativo": true,
              "remover": false,
              "condicional": {
                  "id": 0,
                  "evento_id": 0,
                  "ativo": false,
                  "formulario": {},
                  "condicao": "igual",
                  "campo": "escritura",
                  "comparacao": "massa",
                  "acao": ""
              },
              "etapa_id": 1,
              "itens": [
                  {
                      "id": 1,
                      "descricao": "Aguardando assinatura",
                      "ativo": true
                  }
              ]
          },
          {
              "id": 1,
              "descricao": "Adicionar tag",
              "ativaCondicional": true,
              "ativo": true,
              "remover": false,
              "condicional": {
                  "id": 0,
                  "evento_id": 0,
                  "ativo": false,
                  "formulario": {},
                  "condicao": "contem",
                  "campo": "escritura",
                  "comparacao": "massa",
                  "acao": ""
              },
              "etapa_id": 1,
              "itens": [
                  {
                      "id": 1,
                      "descricao": "Aguardando assinatura",
                      "ativo": true
                  }
              ]
          }
      ],
      "evento_id": 0
  },
  {
      "id": 1,
      "posicao": 2,
      "tipo_id": 1,
      "tipo": {
          "id": 1,
          "descricao": "Assinatura"
      },
      "formularios": [
          {
              "id": 1,
              "descricao": "Licença ambiental",
              "ativo": true,
              "template": [
                  {
                      "id": 7,
                      "type": "file",
                      "label": "Escritura",
                      "name": "escritura",
                      "pattern": "",
                      "value": "",
                      "options": [
                          "pdf",
                          "imagem",
                          "office",
                          "video"
                      ],
                      "multiple": false,
                      "required": true,
                      "active": true
                  },
                  {
                      "id": 7,
                      "type": "file",
                      "label": "Escritura multipla",
                      "name": "escritura",
                      "pattern": "",
                      "value": "",
                      "options": [
                          "pdf",
                          "office"
                      ],
                      "multiple": true,
                      "required": true,
                      "active": true
                  },
                  {
                      "id": 1,
                      "type": "text",
                      "label": "Nome",
                      "name": "nome",
                      "options": [],
                      "pattern": "",
                      "multiple": false,
                      "required": true,
                      "active": true
                  },
                  {
                      "id": 2,
                      "type": "text",
                      "label": "Sobrenome",
                      "name": "sobrenome",
                      "value": "",
                      "pattern": "",
                      "options": [],
                      "multiple": false,
                      "required": true,
                      "active": true
                  },
                  {
                      "id": 3,
                      "type": "number",
                      "label": "Idade",
                      "name": "idade",
                      "value": "",
                      "pattern": "",
                      "options": [],
                      "multiple": false,
                      "required": true,
                      "active": true
                  },
                  {
                      "id": 4,
                      "type": "checkbox",
                      "label": "Verdadeiro",
                      "name": "verdadeiro",
                      "value": "true",
                      "pattern": "",
                      "options": [],
                      "multiple": false,
                      "required": true,
                      "active": true
                  },
                  {
                      "id": 5,
                      "type": "select",
                      "label": "Estado",
                      "name": "estado",
                      "value": "",
                      "options": [
                          "SP",
                          "MG"
                      ],
                      "pattern": "",
                      "multiple": false,
                      "required": true,
                      "active": true
                  },
                  {
                      "id": 6,
                      "type": "textarea",
                      "label": "Observações",
                      "name": "observacao",
                      "value": "",
                      "options": [],
                      "pattern": "",
                      "multiple": false,
                      "required": true,
                      "active": true
                  }
              ],
              "assinantes": {}
          },
          {
              "id": 2,
              "descricao": "Pedido de construção",
              "ativo": true,
              "template": [
                  {
                      "id": 4,
                      "type": "checkbox",
                      "label": "Verdadeiro",
                      "name": "verdadeiro",
                      "value": "true",
                      "pattern": "",
                      "options": [],
                      "multiple": false,
                      "required": true,
                      "active": true
                  },
                  {
                      "id": 5,
                      "type": "select",
                      "label": "Estado",
                      "name": "estado",
                      "value": "",
                      "options": [
                          "SP",
                          "MG"
                      ],
                      "pattern": "",
                      "multiple": false,
                      "required": true,
                      "active": true
                  }
              ],
              "assinantes": {}
          }
      ],
      "assinantes": [
          {
              "id": 1,
              "descricao": "Diretoria",
              "ativo": true
          },
          {
              "id": 2,
              "descricao": "Requerente",
              "ativo": true
          }
      ],
      "conferencias": [],
      "eventos": [
          {
              "id": 2,
              "descricao": "Mudar setor responsavel",
              "ativaCondicional": false,
              "ativo": false,
              "remover": false,
              "etapa_id": 0,
              "itens": [
                  {
                      "id": 1,
                      "descricao": "Setor 1",
                      "ativo": true
                  },
                  {
                      "id": 2,
                      "descricao": "Setor 2",
                      "ativo": true
                  }
              ]
          }
      ],
      "evento_id": 0
  }
]

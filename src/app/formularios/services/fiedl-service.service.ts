import { EventEmitter, Injectable } from '@angular/core';
import { Field } from '../models/Field.model';


@Injectable({
  providedIn: 'root'
})
export class FiedlService {

  public eventoFormulario = new EventEmitter()

  constructor() { }

  public listaFilds(): Field[] {

    return [
      {
        id: 8,
        type: 'endereco',
        label: 'Endereço residencial',
        name: 'endereco',
        pattern: '',
        value: {
          cep: "09855340",
          state: "SP",
          city: "São Bernardo do Campo",
          neighborhood: "Cooperativa",
          street: "Rua Serra da Prata",
          service: "open-cep",
          location: {
              type: "Point",
              coordinates: {}
          }
      },
        options: [],
        multiple: false,
        required: true,
        active: true
      },
      {
        id: 8,
        type: 'cordenadas',
        label: 'Localização',
        name: 'cordenada1',
        pattern: '',
        value: '10:10',
        options: [],
        multiple: false,
        required: true,
        active: true
      },
      {
        id: 7,
        type: 'file',
        label: 'Escritura',
        name: 'escritura1',
        pattern: '',
        value: '',
        options: ['pdf','imagem','office','video'],
        multiple: false,
        required: true,
        active: true
      },
      {
        id: 7,
        type: 'file',
        label: 'Escritura multipla',
        name: 'escritura2',
        pattern: '',
        value: '',
        options: ['pdf','office'],
        multiple: true,
        required: true,
        active: true
      },{
      id: 1,
      type: 'text',
      label: 'Nome',
      name: 'nome',
      value: 'Leandro',
      options: [],
      pattern: '',
      multiple: false,
      required: true,
      active: true
    }, {
      id: 2,
      type: 'text',
      label: 'Sobrenome',
      name: 'sobrenome',
      value: 'Pereire de Oliveira',
      pattern: '',
      options: [],
      multiple: false,
      required: true,
      active: true
    }, {
      id: 3,
      type: 'number',
      label: 'Idade',
      name: 'idade',
      value: '36',
      pattern: '',
      options: [],
      multiple: false,
      required: true,
      active: true
    }, {
      id: 4,
      type: 'checkbox',
      label: 'Verdadeiro',
      name: 'verdadeiro',
      value: false,
      pattern: '',
      options: [],
      multiple: false,
      required: true,
      active: true
    },
    {
      id: 5,
      type: 'select',
      label: 'Estado',
      name: 'estado',
      value: 'SP',
      options: ['SP', 'MG'],
      pattern: '',
      multiple: false,
      required: true,
      active: true
    },
    {
      id: 6,
      type: 'textarea',
      label: 'Observações',
      name: 'observacao',
      value: 'Mora em São Bernardo do Campo',
      options: [],
      pattern: '',
      multiple: false,
      required: true,
      active: true
    }]
  }
}

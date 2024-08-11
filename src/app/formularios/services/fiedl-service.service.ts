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
        value: '',
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
        value: '',
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
      value: undefined,
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
      value: '',
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
      value: '',
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
      value: 'true',
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
      value: '',
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
      value: '',
      options: [],
      pattern: '',
      multiple: false,
      required: true,
      active: true
    }]
  }
}

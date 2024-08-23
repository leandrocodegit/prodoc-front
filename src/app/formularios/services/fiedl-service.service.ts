import { EventEmitter, Injectable } from '@angular/core';
import { Field } from '../models/Field.model';


@Injectable({
  providedIn: 'root'
})
export class FiedlService {

  public eventoFormulario = new EventEmitter()

  constructor() { }

  validaExpressao(scriptJson: any, fields: Field[]){
    if (scriptJson == '')
      return false;
    try {

      let cmd: any = JSON.parse(scriptJson)
      let value = fields.find(field => field.id == cmd.id)


      if (value && value.value) {
        let el = `{${value.value} ${cmd.condicao} ${cmd.valor}}`
      //  const result = eval(el);
      }

      return true
    } catch (error) {
      console.log(error);

    }
    return false;
  }

  public listaFilds(): Field[] {

    return [
      {
        label: 'Nome',
        type: 'textfield',
        text: '',
        extends: {
          subtype: 'text',
          conditional: '',
          color: 'black',
          fontSize: 13,
          active: true,
          multiple: false,
          icon: '',
          options:[],
          pattern: '',
          message: '',
        },
        value: '',
        subtype: 'color',
        layout: '',
        id: 'dataNascimento',
        key: '',
        validate: {
          minLength: 0,
          maxLength: 0,
          pattern: '',
          required: true
        },
        description: '',
        defaultValue:'',
        readonly: false,
        disabled: false,
        multiple: false,
        searchable: false,
        disallowPassedDates: false,
        values: [],
        properties: '',
        conditional: {
          hide: ''
        },
        timeLabel: '',
        timeSerializingFormat: '',
        timeInterval: 0,
      },
      {
        label: 'Nome',
        type: 'textfield',
        text: '',
        extends: {
          subtype: 'text',
          conditional: '',
          color: 'black',
          fontSize: 13,
          active: true,
          multiple: false,
          icon: '',
          options:[],
          pattern: '',
          message: '',
        },
        value: '',
        subtype: 'datetime',
        layout: '',
        id: 'dataNascimento',
        key: '',
        validate: {
          minLength: 0,
          maxLength: 0,
          pattern: '',
          required: true
        },
        description: '',
        defaultValue:'',
        readonly: false,
        disabled: false,
        multiple: false,
        searchable: false,
        disallowPassedDates: false,
        values: [],
        properties: '',
        conditional: {
          hide: ''
        },
        timeLabel: '',
        timeSerializingFormat: '',
        timeInterval: 0,
      },{
        label: 'Idade',
        type: 'textfield',
        text: '',
        extends: {
          subtype: 'text',
          conditional: '',
          color: 'black',
          fontSize: 13,
          active: true,
          multiple: false,
          icon: '',
          options:[],
          pattern: '',
          message: '',
        },
        value: '',
        subtype: 'number',
        layout: '',
        id: 'idade',
        key: '',
        validate: {
          minLength: 10,
          maxLength: 20,
          pattern: '',
          required: true
        },
        description: '',
        defaultValue:'',
        readonly: false,
        disabled: false,
        multiple: false,
        searchable: false,
        disallowPassedDates: false,
        values: [],
        properties: '',
        conditional: {
          hide: ''
        },
        timeLabel: '',
        timeSerializingFormat: '',
        timeInterval: 0,
      },
      {
        label: 'Nome',
        type: 'textfield',
        text: '',
        extends: {
          subtype: 'text',
          conditional: '',
          color: 'black',
          fontSize: 13,
          active: true,
          multiple: false,
          icon: '',
          options:[],
          pattern: '',
          message: '',
        },
        value: '',
        subtype: 'text',
        layout: '',
        id: 'idade',
        key: '',
        validate: {
          minLength: 0,
          maxLength: 2,
          pattern: '^C-[0-9]+$',
          required: true
        },
        description: '',
        defaultValue:'',
        readonly: false,
        disabled: false,
        multiple: false,
        searchable: false,
        disallowPassedDates: false,
        values: [],
        properties: '',
        conditional: {
          hide: ''
        },
        timeLabel: '',
        timeSerializingFormat: '',
        timeInterval: 0,

      },
      {
        label: 'Documentos',
        type: 'text',
        text: '',
        extends: {
          subtype: 'file',
          conditional: '',
          color: 'black',
          fontSize: 13,
          active: true,
          multiple: false,
          icon: '',
          options:[],
          pattern: '',
          message: '',
        },
        value: '',
        subtype: 'file',
        layout: '',
        id: 'pdf',
        key: '',
        validate: {
          minLength: 0,
          maxLength: 0,
          pattern: '',
          required: true,
        },
        description: '',
        defaultValue:'',
        readonly: false,
        disabled: false,
        multiple: false,
        searchable: false,
        disallowPassedDates: false,
        values: [],
        properties: '',
        conditional: {
          hide: ''
        },
        timeLabel: '',
        timeSerializingFormat: '',
        timeInterval: 0,
      }
      ]
  }
}

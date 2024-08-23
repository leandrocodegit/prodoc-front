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
        label: 'Nome',
        type: 'textfield',
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
          message: '',
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
          message: '',
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
          message: '',
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
          message: 'An invoice number in the format: C-123.',
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
          message: '',
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

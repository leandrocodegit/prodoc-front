export class Field {
  label: string;
  type: string;
  text: string;
  extends: {
    subtype: string;
    conditional: string;
    color: string;
    fontSize: number;
    active: boolean;
    multiple: boolean;
    icon: string,
    options:any[]
    pattern: string,
    message: string;
  };
  value?: any;
  subtype: string;
  layout: any;
  id: string;
  key: string;
  validate: {
    minLength: number,
    maxLength: number,
    pattern: string,
    required: boolean;
  };
  description: string;
  defaultValue: any;
  readonly: boolean;
  disabled: boolean;
  multiple: boolean;
  searchable: boolean;
  disallowPassedDates: boolean;
  values?: any[];
  properties: any;
  conditional: {
    hide: any
  };
  timeLabel: string;
  timeSerializingFormat: string;
  timeInterval: number;

  constructor() {
    this.label = '';
    this.type = '';
    this.text = '';
    this.extends = {
      subtype: '',
      conditional: '',
      color: '',
      fontSize: 13,
      active: true,
      multiple: false,
      icon: '',
      options: [],
      pattern: '',
      message: '',
    }
    this.subtype = '';
    this.layout = {};
    this.id = '';
    this.key = '';
    this.validate = {
      minLength: 0,
      maxLength: 0,
      pattern: '',
      required: false,
    };
    this.description = '';
    this.defaultValue = null;
    this.readonly = false;
    this.disabled = false;
    this.multiple = false;
    this.searchable = false;
    this.disallowPassedDates = false;
    this.values = [];
    this.properties = {};
    this.conditional = {
      hide: '',
    };
    this.timeLabel = '';
    this.timeSerializingFormat = '';
    this.timeInterval = 0;
  }
}

export class Field {
  id: number;
  type: string;
  label: string;
  name: string;
  value?: any;
  options?: string[];
  pattern: string;
  multiple: boolean;
  required: boolean;
  active: boolean;

  constructor(
    id = 0,
    type = 'text',
    label= '',
    name= '',
    pattern= '',
    multiple= false,
    required= false,
    active= false,
    value= '',
    options= [],
  ) {
    this.id = id;
    this.type = type;
    this.pattern = pattern;
    this.label = label;
    this.name = name;
    this.multiple = multiple;
    this.required = required;
    this.active = active;
    this.value = value;
    this.options = options;
  }
}

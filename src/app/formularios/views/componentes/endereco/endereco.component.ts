import { Component, Input } from '@angular/core';
import { Field } from '../../../models/Field.model';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrl: './endereco.component.css'
})
export class EnderecoComponent {

  @Input() field!: Field;
  @Input() form!: FormGroup;

  protected endereco = {
    cep: "",
    state: "",
    city: "",
    neighborhood: "",
    street: "",
    complemento: "",
    numero: "",
    location: {
      type: "",
      "": {}
    }
  }

  protected estados = [
    { nome: 'Acre', sigla: 'AC' },
    { nome: 'Alagoas', sigla: 'AL' },
    { nome: 'Amapá', sigla: 'AP' },
    { nome: 'Amazonas', sigla: 'AM' },
    { nome: 'Bahia', sigla: 'BA' },
    { nome: 'Ceará', sigla: 'CE' },
    { nome: 'Distrito Federal', sigla: 'DF' },
    { nome: 'Espírito Santo', sigla: 'ES' },
    { nome: 'Goiás', sigla: 'GO' },
    { nome: 'Maranhão', sigla: 'MA' },
    { nome: 'Mato Grosso', sigla: 'MT' },
    { nome: 'Mato Grosso do Sul', sigla: 'MS' },
    { nome: 'Minas Gerais', sigla: 'MG' },
    { nome: 'Pará', sigla: 'PA' },
    { nome: 'Paraíba', sigla: 'PB' },
    { nome: 'Paraná', sigla: 'PR' },
    { nome: 'Pernambuco', sigla: 'PE' },
    { nome: 'Piauí', sigla: 'PI' },
    { nome: 'Rio de Janeiro', sigla: 'RJ' },
    { nome: 'Rio Grande do Norte', sigla: 'RN' },
    { nome: 'Rio Grande do Sul', sigla: 'RS' },
    { nome: 'Rondônia', sigla: 'RO' },
    { nome: 'Roraima', sigla: 'RR' },
    { nome: 'Santa Catarina', sigla: 'SC' },
    { nome: 'São Paulo', sigla: 'SP' },
    { nome: 'Sergipe', sigla: 'SE' },
    { nome: 'Tocantins', sigla: 'TO' }
  ];

  protected cidades: any[] = []
  constructor(
    private http: HttpClient
  ) {

  }

  consultaCep(event: any) {

    if (event.target.value && event.target.value.length == 8)
      this.http.get('https://brasilapi.com.br/api/cep/v2/' + event.target.value).subscribe((response: any) => {
        this.form.controls[this.field.name + 'street'].setValue(response.street)
        this.form.controls[this.field.name + 'state'].setValue(response.state)
        this.form.controls[this.field.name + 'city'].setValue(response.city.toUpperCase())
        this.form.controls[this.field.name + 'neighborhood'].setValue(response.neighborhood)
        this.listaCidade(response.state)
      })

  }

  listaCidade(estado: string){
    this.http.get('https://brasilapi.com.br/api/ibge/municipios/v1/' + estado).subscribe((response: any) => {
      this.cidades = response
    })

  }

  possuiErro(form: any) {
    if (!form || !form.errors || !form.touched) {
      return false
    }
    return form.errors.required
  }

   isValid(name:string): boolean {
    var form = this.form.controls[name];
    if (form)
      return form.valid && form.touched;
    return false;
  }


}

import { Component, Input } from '@angular/core';
import { Field } from '../../models/Field.model';

@Component({
  selector: 'app-painel-propriedades-formulario',
  templateUrl: './painel-propriedades-formulario.component.html',
  styleUrl: './painel-propriedades-formulario.component.css'
})
export class PainelPropriedadesFormularioComponent {

  @Input() field?: Field
  @Input() item?: any
  protected opcao = {
    label: '',
    value: ''
  };


  alterarDetalhes() {

  }

  adicionarOpcao() {
    if (this.opcao.label != '') {
      var opt = this.field.values.find(opt => opt.label == this.opcao.label);
      if (opt) {
        opt.label = this.opcao.label;
        opt.value = this.opcao.label;
      } else {
        this.field.values.push({
          label: this.opcao.label,
          value: this.opcao.label
        });
      }
      this.opcao = {
        label: '',
        value: ''
      };
      this.field.values.sort((a, b) => a.label.localeCompare(b.label));
    }
  }

  editarOpcao(opcao: any) {
    this.opcao = opcao;
  }

  removerOpcao(opcao: any) {
    var opt = this.field.values.find(opt => opt.value == opcao.value);
    if(opt){
      this.field.values = this.field.values.filter(opt => opt.value !== opcao.value);
    }
  }

  possuiExtensao(extensao: string){
    if(this.field.extends.options?.find(ext => ext == extensao))
      return true;
    return false;
  }

  novoTipoArquivo(extensao: string){
    if(!this.possuiExtensao(extensao))
      this.field.extends.options?.push(extensao)
    else{
      this.field.extends.options = this.field.extends.options?.filter(ext => ext != extensao)
    }
    var pattern = '';
    if (this.field.extends.options && this.field.extends.options.length) {
      this.field.extends.options.forEach(item => {
        if (item === 'pdf') {
          pattern += '.pdf,'
        }
        if (item === 'office') {
          pattern += '.docx,.exl,.pp,'
        }
        if (item === 'imagem') {
          pattern += '.png,.webp,.jpg,'
        }
        if (item === 'video') {
          pattern += '.mp4'
        }
      })
    }
    this.field.extends.pattern = pattern;
  }

}

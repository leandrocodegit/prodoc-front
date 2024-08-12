import { Component, Input, OnInit } from '@angular/core';
import { AdicionarCampoComponent } from '../adicionar-campo/adicionar-campo.component';
import { MatDialog } from '@angular/material/dialog';
import { FiedlService } from '../../services/fiedl-service.service';
import { Field } from '../../models/Field.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-formulario-customizado',
  templateUrl: './formulario-customizado.component.html',
  styleUrls: ['./formulario-customizado.component.css']
})
export class FormularioCustomizadoComponent implements OnInit {

  @Input() fields: any[] = [];
  protected reload = true;


  constructor(
    private fiedlService: FiedlService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.fields = this.fiedlService.listaFilds();
    this.reloadFormulario();
  }

  novoCampo() {
    var retorno = this.dialog.open(AdicionarCampoComponent)

    retorno.afterClosed().subscribe(data => {
      if (data) {
        this.fields.push(data);
        this.reloadFormulario();
      }
    })
  }

  editarIten(field: Field) {
    var retorno = this.dialog.open(AdicionarCampoComponent, {
      data: JSON.parse(JSON.stringify(field))
    })

    retorno.afterClosed().subscribe(data => {
      if (data && data.id && data.id != 0) {
        var original = this.fields.findIndex(fil => fil.id === data.id)
        this.fields[original] = data
      }
      this.reloadFormulario();
    })
  }

  ativarIten(field: Field) {
    field.active = !field.active
  }

  defineTipo(field: Field) {
    switch (field.type) {
      case 'text': return 'Texto';
      case 'number': return 'Número';
      case 'select': return 'Lista de opções';
      case 'checkbox': return 'Caixa de seleção';
      case 'cordenadas': return 'Cordenadas';
      case 'textarea': return 'Area de texo';
      case 'tel': return 'Telefone';
      case 'password': return 'Senha';
      case 'email': return 'Email';
      case 'file': return 'Arquivo';
      case 'endereco': return 'Endereço';


    }
    return '';
  }

  protected reloadFormulario(){
    this.reload = true;
    var intevalo = setInterval(() => {
      this.reload = false;
      clearInterval(intevalo)
    }, 1000);
  }

  listaOpcoes(field: Field) {
    if (field.options && field.options.length)
      return field.options.map(item => item).reduce((a, b) => a + ', ' + b);
    return '*'
  }

  listFieldsAtivos(){
    return this.fields.filter(field => field.active);
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
          
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.fiedlService.eventoFormulario.emit()
  }

}

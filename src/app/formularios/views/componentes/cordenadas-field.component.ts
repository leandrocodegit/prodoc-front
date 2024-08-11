import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/Field.model';
import { MatDialog } from '@angular/material/dialog';
import { ContainerMapaComponent } from '../../../mapa/views/container-mapa/container-mapa.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MapaService } from '../../../mapa/services/mapa.service';
import { DataMapaComponent } from '../../../mapa/views/data-mapa/data-mapa.component';

@Component({
  selector: 'app-cordenadas-field',
  template: `
<div class="componente-customizado" *ngIf="form" [formGroup]="form">
  <div class="componente-cordenadas">
    <div style="padding-right: 10px">
      <label>Latitude</label>
      <input [(ngModel)]="latitude" [formControlName]="field.name" [type]="field.type" class="form-control input-cusomizado" />
    </div>
    <div>
      <label>Longitude</label>
      <div class="componente-customizado-icon">
        <input [(ngModel)]="longitude" [formControlName]="field.name + 'lng'" [type]="field.type" class="form-control input-cusomizado" />
        <span (click)=abrirMapa() class="componente-cordenadas material-symbols-outlined">
          my_location
        </span>
        <span *ngIf="isValid && isTouched" class="material-symbols-outlined">
          task_alt
        </span>
      </div>
    </div>
  </div>
  <div *ngIf="!isValid && isTouched" class="error-message">
    <div class="text-danger" *ngIf="possuiErro(form.controls[field.name])">
      {{ field.label }} é obrigatório.
    </div>
  </div>
</div>
  `
})
export class CordenadasFieldComponent implements OnInit, OnDestroy {
  @Input() field!: Field;
  @Input() form!: FormGroup;

  protected latitude: string = "";
  protected longitude: string = "";

  constructor(
    private dialog: MatDialog,
    private sheet: MatBottomSheet,
    private mapaService: MapaService

  ) {




  }
  ngOnInit(): void {
   // this.mapaService.cordenadasSelect.set(this.field.name, new EventEmitter());
   // var subscribe = this.mapaService.cordenadasSelect.get(this.field.name)
   // if(subscribe)
   this.mapaService.cordenadasSelect.subscribe(data => {
      if (data && data.field) {
        if (data.field.name === this.field.name) {
          if (this.form.controls[this.field.name] && this.form.controls[this.field.name + 'lng']) {

            this.form.controls[data.field.name].setValue(this.field.value && this.field.value.includes(':')? this.field.value.split(':')[0] : '');
           this.form.controls[data.field.name + 'lng'].setValue(this.field.value && this.field.value.includes(':')? this.field.value.split(':')[1] : '');
          }
        }
      }
    })
  }
  ngOnDestroy(): void {
  //  var subscribe = this.mapaService.cordenadasSelect.get(this.field.name)
  //  if(subscribe){
  //    subscribe.unsubscribe()
  //    this.mapaService.cordenadasSelect.delete(this.field.name)
  //  }

  }

  possuiErro(form: any) {
    if (!form || !form.errors) {
      return false
    }
    return form.errors.required
  }

  abrirMapa() {
    this.sheet.open(DataMapaComponent, {
      data: this.field,
      panelClass: 'box-mapa-sheet'
    })
  }

  get isValid(): boolean {
    if (this.form.controls[this.field.name] && this.form.controls[this.field.name + 'lng'])
      return this.form.controls[this.field.name].valid && this.form.controls[this.field.name + 'lng'].valid;
    return false;
  }

  get isTouched(): boolean {
    if (this.form.controls[this.field.name] && this.form.controls[this.field.name + 'lng'])
      return this.form.controls[this.field.name].touched || this.form.controls[this.field.name + 'lng'].touched;
    return false
  }
}

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
      <input [(ngModel)]="latitude" [formControlName]="field.id" [type]="field.type" class="form-control input-cusomizado" />
    </div>
    <div>
      <label>Longitude</label>
      <div class="componente-customizado-icon">
        <input [(ngModel)]="longitude" [formControlName]="field.id + 'lng'" [type]="field.type" class="form-control input-cusomizado" />
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
    <div class="text-danger" *ngIf="possuiErro(form.controls[field.id])">
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

   this.mapaService.cordenadasSelect.subscribe(data => {
      if (data && data.field) {
        if (data.field.id === this.field.id) {
          if (this.form.controls[this.field.id] && this.form.controls[this.field.id + 'lng']) {

            this.form.controls[data.field.id].setValue(this.field.defaultValue && this.field.defaultValue.includes(':')? this.field.defaultValue.split(':')[0] : '');
           this.form.controls[data.field.id + 'lng'].setValue(this.field.defaultValue && this.field.defaultValue.includes(':')? this.field.defaultValue.split(':')[1] : '');
          }
        }
      }
    })
  }
  ngOnDestroy(): void {
 

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
    if (this.form.controls[this.field.id] && this.form.controls[this.field.id + 'lng'])
      return this.form.controls[this.field.id].valid && this.form.controls[this.field.id + 'lng'].valid;
    return false;
  }

  get isTouched(): boolean {
    if (this.form.controls[this.field.id] && this.form.controls[this.field.id + 'lng'])
      return this.form.controls[this.field.id].touched || this.form.controls[this.field.id + 'lng'].touched;
    return false
  }
}

import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Field } from '../../../formularios/models/Field.model';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-data-mapa',
  templateUrl: './data-mapa.component.html',
  styleUrl: './data-mapa.component.css'
})
export class DataMapaComponent {

  @Input() field: Field;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data:any) {
    this.field = data;
   }

}

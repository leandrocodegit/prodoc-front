import { Component, OnInit } from '@angular/core';
import * as fabric from 'fabric';

@Component({
  selector: 'app-escrever',
  templateUrl: './escrever.component.html',
  styleUrl: './escrever.component.css'
})
export class EscreverComponent implements OnInit {

  private canvas!: fabric.Canvas;

  ngOnInit() {
    // Inicializa o canvas após a view ser carregada
   
  }
}

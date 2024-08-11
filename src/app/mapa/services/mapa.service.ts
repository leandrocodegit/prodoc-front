import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  public cordenadasSelect = new EventEmitter()
  //public cordenadasSelect = new Map<string, EventEmitter<any>>()

  constructor() { }
}

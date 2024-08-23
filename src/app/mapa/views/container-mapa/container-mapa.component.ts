import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as Leaflet from 'leaflet';
import { MapaService } from '../../services/mapa.service';
import { Field } from '../../../formularios/models/Field.model';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

var mapa: any | undefined;
var mapIsInit: boolean = false
var markers = new Map<number, any>()
var markersZonas = new Array()
var mapaServiceEmiter: MapaService;

@Component({
  selector: 'app-container-mapa',
  templateUrl: './container-mapa.component.html',
  styleUrl: './container-mapa.component.css'
})
export class ContainerMapaComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() field!: Field;
  @ViewChild('containerMap', { static: true }) containerMap!: ElementRef;
  private tiles: any;
  protected isView = true
  private _draggable: boolean = false
  private center = {
    lat: -23.550539868478452,
    lng: -46.634763387922106
  }

  constructor(
    private renderer: Renderer2,
    private mapaService: MapaService,
    private sheet: MatBottomSheetRef<ContainerMapaComponent>
  ) {

    mapaServiceEmiter = mapaService;

  }

  ngAfterViewInit(): void {
    this.initMap()
  }

  ngOnDestroy(): void {

    if (mapa) {
      //mapa.remove();
    }
  }

  ngOnInit(): void {
   // if (mapIsInit)
    //  this.getContenText()
  }

  getContenText() {
    if (mapIsInit) {
      var container = document.getElementById('map')!;
      if (container != null) {
        this.isView = false
        this.renderer.appendChild(this.containerMap.nativeElement, container);
      }
      else {
        this.isView = true
        mapIsInit = false
      }
    }
  }

  private initMap(): void {

    if (!mapa || true)
      mapa = Leaflet.map('map', {
        center: this.center,
        zoom: 17,
        zoomControl: false
      });

    this.tiles = Leaflet.tileLayer("https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}@2x.png", {
      maxZoom: 21,
      minZoom: 10,
      attribution: '© <a target="_top" rel="noopener" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, © <a target="_top" rel="noopener" href="https://carto.com/attribution">CARTO</a>',
    }).addTo(mapa);

    mapa.on('click', (e: any) => {

      this.field.defaultValue = e.latlng.lat + ':' + e.latlng.lng;

       if (true) {
        this.mapaService.cordenadasSelect.emit({
          lat: e.latlng.lat,
          lng: e.latlng.lng,
          field: this.field
        })
        this.sheet.dismiss()
      }
    });

    mapa.touchZoom.enable();

    mapIsInit = true

  }

  reecentralizar() { }

}

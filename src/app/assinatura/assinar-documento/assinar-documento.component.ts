import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-assinar-documento',
  templateUrl: './assinar-documento.component.html',
  styleUrl: './assinar-documento.component.css'
})
export class AssinarDocumentoComponent {

  events: any[] = [
    {status: 'Ordered', date: '15/10/2020 10:30', icon: PrimeIcons.CHECK, color: '#278cb0', image: 'game-controller.jpg'},
    {status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.CHECK, color: '#278cb0'},
    {status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.FILE, color: '#ff4f69'} 
];
}

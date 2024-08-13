import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomTranslateServiceService {

  constructor() { }

  translate(template: string, replacements: any): string {
    const customTranslations:any = {
      'Change element': 'Alterar elemento',
      'End Event': 'Fim do evento',
      'Star Event': 'Inicio',
      'Parallel Gateway': 'Paralelo',
      'Complex Gateway': 'Complexo',
      'Inclusive Gateway': 'Inclusive',
      'Event based Gateway': 'Evento',



      // Add more translations as needed
    };

    return customTranslations[template] || template;
  }
}

import { Injectable } from '@angular/core';
import { Section } from '../models/section.model'

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  getAll(): Section[] {
    return [
      {
        title: 'Acerca de Nosotros',
        description: 'Bienvenido a la página "Acerca de Nosotros". Aquí puedes obtener información sobre nuestra organización.'
      },
      {
        title: 'Contáctanos',
        description: 'Visita la página "Contáctanos" para obtener detalles de contacto y enviarnos un mensaje.'
      },
      {
        title: 'Oferta Educativa',
        description: 'Explora nuestra "Oferta Educativa" para conocer nuestros programas de estudio.'
      },
      {
        title: 'Plan de Estudio',
        description: 'Consulta el "Plan de Estudio" para obtener información detallada sobre nuestros cursos y currículo.'
      },
    ]
  }
}

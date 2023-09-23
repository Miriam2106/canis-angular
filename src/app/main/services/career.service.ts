import { Injectable } from '@angular/core';
import { Career } from '../models/career.model'

@Injectable({
  providedIn: 'root'
})
export class CareerService {
  getAll(): Career[] {
    return [
      {
        title: 'Desarrollo de software',
        description: 'Serás un profesional capaz de implementar soluciones multiplataforma, en la nube y software embebido, en entornos seguros mediante la adquisición y administración de datos e ingeniería de software para contribuir a la automatización de los procesos en las organizaciones.'
      },
      {
        title: 'Diseño digital',
        description: 'Serás capaz de crear elementos visuales u objetos gráficos utilizando herramientas digitales o programas de computadoras con la finalidad de ser utilizados por productores de películas y cortometrajes animados, así como en las empresas que desean elaborar el prototipo de sus productos y mejorar la presentación de estos.'
      },
      {
        title: 'Diseño de modas',
        description: 'Aprenderás a diseñar prendas de vestir a través de la investigación, aplicando metodologías de diseño para satisfacer las necesidades del mercado. Administrar el proceso de producción textil y del vestir a través de la planeación y supervisión para satisfacer las necesidades del mercado y optimizar los recursos de la empresa.'
      },
    ]
  }
}

import { Injectable } from '@angular/core'
import { Career } from '../entities/career'
import { GetAllCareersUseCase } from './get-all-careers.use-case'

@Injectable({
  providedIn: 'root'
})
export class GetAllCareersInteractorService implements GetAllCareersUseCase {
  execute(): Career[] {
    return [
      {
        title: 'TSU en Desarrollo de Software',
        curriculum: [
          {
            quarterNumber: 1,
            isInternships: false,
            subjects: [
              'Desarrollo de habilidades de pensamiento lógico',
              'Fundamentos de TI',
              'Fundamentos de redes',
              'Metodología de la programación',
            ]
          },
          {
            quarterNumber: 2,
            isInternships: false,
            subjects: [
              'Metodologías y modelado de desarrollo de software',
              'Interconexión de redes',
              'Programación orientada a objetos',
              'Introducción al diseño digital',
              'Base de datos',
            ]
          },
          {
            quarterNumber: 3,
            isInternships: false,
            subjects: [
              'Sistemas operativos',
              'Aplicaciones web',
              'Bases de datos para aplicaciones',
              'Integradora I',
            ]
          },
          {
            quarterNumber: 4,
            isInternships: false,
            subjects: [
              'Estándares y métricas para el desarrollo de software',
              'Principios para loT',
              'Diseño de Apps',
              'Estructura de datos aplicadas Aplicaciones web orientadas a servicios',
              'Evaluación y mejora para el desarrollo de software',
            ]
          },
          {
            quarterNumber: 5,
            isInternships: false,
            subjects: [
              'Aplicaciones de loT',
              'Desarrollo móvil multiplataforma',
              'Aplicaciones web para 14.0',
              'Bases de datos para cómputo en la nube',
              'Integradora II',
            ]
          },
          {
            quarterNumber: 6,
            isInternships: true
          },
        ]
      },
      {
        title: 'Licenciatura en Diseño Digital',
        curriculum: [
          {
            quarterNumber: 7,
            isInternships: false,
            subjects: [
              'Semiótica y hermeneutica',
              'Mercadotecnia digital',
              'Metodología de diseño',
              'Estética digital',
            ]
          },
          {
            quarterNumber: 8,
            isInternships: false,
            subjects: [
              'Imagen corporativa',
              'Diseño de interfaz web',
              'Animación 2D avanzada',
            ]
          },
          {
            quarterNumber: 9,
            isInternships: false,
            subjects: [
              'Proceso de producción audiovisual',
              'Diseño publicitario y medios digitales',
              'Diseño gráfico experimental',
              'Modelado y espacios virtuales',
            ]
          },
          {
            quarterNumber: 10,
            isInternships: false,
            subjects: [
              'Gestión de proyectos',
              'Postproducción audiovisual',
              'Animación de personajes 3D',
              'Integradora I',
            ]
          },
          {
            quarterNumber: 11,
            isInternships: true
          },
        ]
      },
      {
        title: 'Ingeniería en Diseño de Modas',
        curriculum: [
          {
            quarterNumber: 7,
            isInternships: false,
            subjects: [
              'Física de fibras',
              'Materiales y aditamentos para el diseño',
              'Diseño de telas',
              'Modelado sobre maniquí',
            ]
          },
          {
            quarterNumber: 8,
            isInternships: false,
            subjects: [
              'Patronaje y graduación digital',
              'Diseño digital de telas',
              'Ingeniería del producto',
              'Emprendimiento',
            ]
          },
          {
            quarterNumber: 9,
            isInternships: false,
            subjects: [
              'Química para acabados textiles',
              'Ingeniería económica',
              'Maquinaria textil',
              'Administración de la manufactura',
              'Moda sostenible',
            ]
          },
          {
            quarterNumber: 10,
            isInternships: false,
            subjects: [
              'Simulación 3D',
              'Normatividad textil y de confección',
              'Innovación textil',
              'Integradora',
              'Diseño de moda',
            ]
          },
          {
            quarterNumber: 11,
            isInternships: true
          },
        ]
      },
    ]
  }
}

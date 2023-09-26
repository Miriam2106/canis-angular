import { Injectable } from '@angular/core'
import { Degree } from '../entities/degree'
import { GetAllDegreesUseCase } from './get-all-degrees.use-case'

@Injectable({
  providedIn: 'root'
})
export class GetAllDegreesInteractorService implements GetAllDegreesUseCase {
  execute(): Degree[] {
    return [
      {
        title: 'TSU - Técnico Superior Universitario',
        careers: [
          'Procesos Industriales área: Manufactura',
          'Técnologías de la Información área: Infraestructura de Redes Digitales',
          'Tecnologías de la Información área: Desarrollo de Software Multiplataforma',
          'Terapia Física área: Rehabilitación',
          'Terapia física área: Turismo de Salud y Bienestar',
          'Diseño digital área: Animación',
          'Administración área: Capital Humano',
          'Contaduría',
          'Diseño y moda industrial área: Producción',
          'Mantenimiento área: Industrial',
          'Mecatrónica área: Automatización',
          'Desarrollo de negocios área: Mercadotecnia',
          'Nanotecnología área: Materiales',
        ]
      },
      {
        title: 'Ingeniería',
        careers: [
          'Ingeniería en Desarrollo y Gestión de Software',
          'Ingeniería en Redes Inteligentes y Ciberseguridad',
          'Ingeniería Industrial',
          'Ingeniería en Mecatrónica',
          'Ingeniería en Nanotecnología',
          'Ingeniería en Diseño Textil y Moda',
          'Ingeniería en Mantenimiento Industrial',
        ]
      },
      {
        title: 'Licenciatura',
        careers: [
          'Licenciatura en Terapia Física',
          'Licenciatura en Diseño Digital y Producción Audiovisual',
          'Licenciatura en Innovación de Negocios y Mercadotecnia',
          'Licenciatura en Gestión de Capital Humano',
        ]
      },
    ]
  }
}

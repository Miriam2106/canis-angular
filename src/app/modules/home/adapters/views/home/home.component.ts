import { Component, OnInit } from '@angular/core'
import { Career } from '../../../entities/career'
import { Color } from '../../../entities/color'
import { Degree } from '../../../entities/degree'
import { GetAllCareersInteractorService } from '../../../use-cases/get-all-careers.interactor.service'
import { GetAllDegreesInteractorService } from '../../../use-cases/get-all-degrees.interactor.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  careers: Career[] = []
  degrees: Degree[] = []
  colors: Color[] = ['success', 'info', 'danger']
  definition = 'La Universidad Tecnológica Emiliano Zapata (UTEZ), es una Universidad pública creada en el año 2000 que forma parte del Sistema Nacional de Universidades Tecnológicas de la SEP, cuyo innovador modelo ofrece planes de estudio para formar Técnicas y Técnicos Superiores Universitarios e Ingenieros e Ingenieras en sólo tres años ocho meses, generando profesionistas competentes con altos niveles tecnológicos para dar respuesta a las necesidades de los sectores social y productivo de la región y del país.'
  mission = 'Formar profesionistas competitivos, con capacidades tecnológicas y sentido humanista, a través de programas educativos pertinentes, incluyentes, con equidad y calidad, comprometidos con el desarrollo sostenible, que realiza investigación tecnológica, promueve la innovación y fomenta la vinculación con los sectores productivo, público y social, para contribuir a satisfacer las necesidades de la sociedad.'
  vision = 'Ser una institución de educación superior tecnológica, reconocida a nivel nacional e internacional por su calidad académica, que contribuye al desarrollo tecnológico, mediante la innovación, vinculación e investigación, y continuando con el compromiso de ser referente dentro del Subsistema de Universidades Tecnológicas y Politécnicas.'

  constructor(private readonly _getAllCareers: GetAllCareersInteractorService, private readonly _getAllDegrees: GetAllDegreesInteractorService) {}

  ngOnInit(): void {
    this.careers = this._getAllCareers.execute()
    this.degrees = this._getAllDegrees.execute()
  }
}

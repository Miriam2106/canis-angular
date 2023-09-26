import { Injectable } from '@angular/core'
import { News } from '../models/news.model'

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor() {}

  getAll(): News[] {
    return [
      {
        tittle: 'Noticia 1',
        description: 'A bordo de una aeronave de la Fuerza Aérea Mexicana, el mandatario aterrizó alrededor de las 16:30 local en el aeropuerto',
      },
      {
        tittle: 'Noticia 2',
        description: 'Some quick example text to build on the Noticia and make up the bulk of the cards content.',
      },
      {
        tittle: 'Noticia 3',
        description: 'Some quick example text to build on the Noticia and make up the bulk of the cards content.',
      },
      {
        tittle: 'Noticia 4',
        description: 'Some quick example text to build on the Noticia and make up the bulk of the cards content.',
      },
      {
        tittle: 'Noticia 5',
        description: 'El peso mexicano se depreció frente al dólar estadounidense este miércoles.',
      },
      {
        tittle: 'Noticia 6',
        description: 'El símbolo del dólar hoy en día se representa así ‘$’ y es una representación gráfica que se usa',
      },
    ]
  }
}
import { Injectable } from '@angular/core'
import { News } from '../entities/news'

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor() {}

  getAll(): News[] {
    return [
      {
        image:'https://www.jornada.com.mx/ultimas/2023/09/08/amlo-arriba-a-colombia-a-reunion-con-gustavo-petro-1192.html/amlo-colombiano.jpg-1044.html/image_large?bc=2023-09-08T18:24:07-05:00',
        tittle: 'Noticia 1',
        description: 'A bordo de una aeronave de la Fuerza Aérea Mexicana, el mandatario aterrizó alrededor de las 16:30 local en el aeropuerto',
      },
      {
        image:'https://www.elfinanciero.com.mx/resizer/QULmxPFCYUlNsKhf430sMskESFk=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/6V6GZZROIZACFNIKTZ7I4REPFM.jpg',
        tittle: 'Noticia 2',
        description: 'Some quick example text to build on the Noticia and make up the bulk of the cards content.',
      },
      {
        image:'https://aristeguinoticias.com/_next/image/?url=https%3A%2F%2Feditorial.aristeguinoticias.com%2Fwp-content%2Fuploads%2F2023%2F09%2Fsismo-collima-jalisco-08092023.jpg&w=1200&q=75',
        tittle: 'Noticia 3',
        description: 'Some quick example text to build on the Noticia and make up the bulk of the cards content.',
      },
      {
        image:'https://images.milenio.com/LCDT8eJryK68pdjXdMckDx9TSbg=/942x532/uploads/media/2023/09/08/abogado-uriel-carmona-traslado-penal_70_0_1140_720.jpeg',
        tittle: 'Noticia 4',
        description: 'Some quick example text to build on the Noticia and make up the bulk of the cards content.',
      },
      {
        image:'https://www.eleconomista.com.mx/__export/1687215584179/sites/eleconomista/img/2020/04/16/dolares_ok.jpg_673822677.jpg',
        tittle: 'Noticia 5',
        description: 'El peso mexicano se depreció frente al dólar estadounidense este miércoles.',
      },
      {
        image:'https://i0.wp.com/tucochinito.com/wp-content/uploads/2021/02/simbolo-dolar-origen-mexicano.jpg?fit=1024%2C576&ssl=1',
        tittle: 'Noticia 6',
        description: 'El símbolo del dólar hoy en día se representa así ‘$’ y es una representación gráfica que se usa',
      },
    ]
  }
}
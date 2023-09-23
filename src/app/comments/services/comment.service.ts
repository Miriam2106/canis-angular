import { Injectable } from '@angular/core'
import { Comment, Rating } from '../models/comment.model'

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor() {}

  getAll(): Comment[] {
    return [
      {
        author: 'Liz Espinosa',
        comment: 'Excelente universidad',
        rating: 5,
        createdAt: new Date()
      },
      {
        author: 'Luba Almazán',
        comment: 'Estoy en el Jira de Würth',
        rating: 4,
        createdAt: new Date('2023-09-26:08:00.00-06:00')
      },
      {
        author: 'Ricardo Cárdenas',
        comment: 'Arreglen las vulnerabilidades del SISA :p',
        rating: 3,
        createdAt: new Date('2023-09-20:16:00.00-06:00')
      },
      {
        author: 'Miriam Saucedo',
        comment: 'Los horarios de este cuatri están muy feos',
        rating: 4,
        createdAt: new Date('2023-09-05:16:00.00-06:00')
      },
      {
        author: 'Roy Salgado',
        comment: 'No sirve ningun aire acondicionado',
        rating: 2,
        createdAt: new Date('2023-08-26:16:00.00-06:00')
      },
      {
        author: 'Karlita Perez',
        comment: 'me gusta mucho bonitas instalaciones mucho orden',
        rating: 5,
        createdAt: new Date('2022-04-17:20:38.00-06:00')
      },
      {
        author: 'Ángel Gomez',
        comment: 'Buen nepotismo el que se aventaron, entra nuevo gobernador y cambian de rector, y desde entonces no han dejado de promocionar su gobierno. Espero este valiendo la pena su patrocinio',
        rating: 1,
        createdAt: new Date('2022-01-23:12:44.00-06:00')
      },
      {
        author: 'Alfredo Hugo Licona Silva García',
        comment: 'EXCELENTE NIVEL ACADÉMICO Y ORGANIZACIÓN DE MUY BUEN NIVEL',
        rating: 5,
        createdAt: new Date('2020-04-22:11:13.00-06:00')
      },
    ]
  }
}

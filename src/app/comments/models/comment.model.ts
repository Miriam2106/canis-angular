export type Rating = 1 | 2 | 3 | 4 | 5

export interface Comment {
  author: string,
  comment: string,
  rating: Rating,
  createdAt: Date
}

import { IBooksRepository } from '../../repositories/IBooksRepository'
import { BooksRepository } from '../../repositories/BooksRepository'

interface IRequest {
    title: string
    authors: string[]
    image: string
    publisher: string
}

class AddBookService {
  constructor (private booksRepository: IBooksRepository) {}

  execute ({ title, authors, image, publisher }: IRequest): void {
    this.booksRepository.add({ title, authors, image, publisher })
  }
}

export { AddBookService }

import { IBooksRepository } from '../../repositories/IBooksRepository'
import { BooksRepository } from '../../repositories/BooksRepository'

import { Book } from '../../models/Book'

interface IRequest {
    id: string
    title?: string
    authors?: string[]
    image?: string
    publisher?: string
}

class UpdateBookService {
  constructor (private booksRepository: IBooksRepository) {}

  execute ({ id, title, authors, image, publisher }: IRequest): Book {
    if (!id) throw new Error('A book id is required')

    const book = this.booksRepository.findById(id)

    if (!book) throw new Error('This book does not exist')

    return this.booksRepository.update({ id, title, authors, image, publisher })
  }
}

export { UpdateBookService }

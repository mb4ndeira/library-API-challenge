import { Book } from '../models/Book'

import { IBooksRepository } from '../../repositories/IBooksRepository'
import { BooksRepository } from '../../repositories/BooksRepository'

class ListBooksService {
  constructor (private booksRepository: IBooksRepository) {}

  execute (): Book[] {
    return this.booksRepository.getAll()
  }
}

export { ListBooksService }

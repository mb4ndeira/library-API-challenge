import { IBooksRepository } from '../../repositories/IBooksRepository'
import { BooksRepository } from '../../repositories/BooksRepository'

interface IRequest {
  id:string
}

class DeleteBookService {
  constructor (private booksRepository: IBooksRepository) {}

  execute ({ id }: IRequest): void {
    if (!this.booksRepository.findById(id)) throw new Error('This book is not registered')

    return this.booksRepository.delete(id)
  }
}

export { DeleteBookService }

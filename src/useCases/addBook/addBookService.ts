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
    const booksWithThisTitle = this.booksRepository.getBooksWithTitle({ title })

    const bookAlreadyRegistered = booksWithThisTitle.find(book => authors.filter(author => authors.includes(author)))

    if (bookAlreadyRegistered) throw new Error('Book is already registered')

    this.booksRepository.add({ title, authors, image, publisher })
  }
}

export { AddBookService }

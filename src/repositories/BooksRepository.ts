import { Book } from '../models/Book'
import { IBooksRepository, IAddBookDTO, IGetBooksWithTitle } from './IBooksRepository'

class BooksRepository implements IBooksRepository {
  private books: Book[] = []

  public static INSTANCE: BooksRepository

  private constructor () {
    this.books = []
  }

  public static getInstance (): BooksRepository {
    if (!BooksRepository.INSTANCE) {
      BooksRepository.INSTANCE = new BooksRepository()
    }

    return BooksRepository.INSTANCE
  }

  add ({ title, publisher, authors, image }: IAddBookDTO): void {
    const book = new Book()

    Object.assign(book, { title, publisher, authors, image })

    this.books.push(book)
  }

  getBooksWithTitle ({ title }: IGetBooksWithTitle): Book[] {
    const booksWithTitle = this.books.filter(book => book.title === title)
    return booksWithTitle
  }
}

export { BooksRepository }

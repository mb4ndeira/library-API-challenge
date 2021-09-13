import { Book } from '../models/Book'
import { IBooksRepository, IAddBookDTO } from './IBooksRepository'

class BooksRepository implements IBooksRepository {
    private books: Book[] = []

    private static INSTANCE: BooksRepository

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
}

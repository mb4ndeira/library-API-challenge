import { BooksRepository } from '../../repositories/BooksRepository'
import { ListBooksService } from './listBooksService'
import { ListBooksController } from './listBooksController'

const booksRepository = BooksRepository.getInstance()
const listBooksService = new ListBooksService(booksRepository)
const listBooksController = new ListBooksController(listBooksService)

export { listBooksController }

import { BooksRepository } from '../../repositories/BooksRepository'
import { AddBookService } from './addBookService'
import { AddBookController } from './addBookController'

const booksRepository = BooksRepository.getInstance()
const addBookService = new AddBookService(booksRepository)
const addBookController = new AddBookController(addBookService)

export { addBookController }

import { BooksRepository } from '../../repositories/BooksRepository'
import { UpdateBookService } from './updateBookService'
import { UpdateBookController } from './updateBookController'

const booksRepository = BooksRepository.getInstance()
const updateBookService = new UpdateBookService(booksRepository)
const updateBookController = new UpdateBookController(updateBookService)

export { updateBookController }

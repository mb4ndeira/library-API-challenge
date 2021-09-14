import { BooksRepository } from '../../repositories/BooksRepository'
import { DeleteBookService } from './deleteBookService'
import { DeleteBookController } from './deleteBookController'

const booksRepository = BooksRepository.getInstance()
const deleteBookService = new DeleteBookService(booksRepository)
const deleteBookController = new DeleteBookController(deleteBookService)

export { deleteBookController }

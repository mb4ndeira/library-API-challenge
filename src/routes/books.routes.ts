import { Router } from 'express'

import { addBookController } from 'src/useCases/addBook'
import { listBooksController } from 'src/useCases/listBooks'
import { deleteBookController } from 'src/useCases/deleteBook'
import { updateBookController } from 'src/useCases/updateBook'

const booksRoutes = Router()

booksRoutes.get('/', (request, response) => {
  return listBooksController.handle(request, response)
})

booksRoutes.post('/', (request, response) => {
  return addBookController.handle(request, response)
})

booksRoutes.delete('/', (request, response) => {
  return deleteBookController.handle(request, response)
})

booksRoutes.put('/', (request, response) => {
  return updateBookController.handle(request, response)
})

export { booksRoutes }

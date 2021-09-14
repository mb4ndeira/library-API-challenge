import { Router } from 'express'

import { addBookController } from 'src/useCases/addBook'
import { listBooksController } from 'src/useCases/listBooks'

const booksRoutes = Router()

booksRoutes.get('/', (request, response) => {
  return listBooksController.handle(request, response)
})

booksRoutes.post('/', (request, response) => {
  return addBookController.handle(request, response)
})

export { booksRoutes }

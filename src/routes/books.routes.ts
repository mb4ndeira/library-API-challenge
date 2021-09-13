import { Router } from 'express'

import { addBookController } from 'src/useCases/addBook'

const booksRoutes = Router()

booksRoutes.post('/', (request, response) => {
  return addBookController.handle(request, response)
})

export { booksRoutes }

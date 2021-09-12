import { Router } from 'express'

const booksRoutes = Router()

booksRoutes.get('/', (request, response) => {
  return response.send('get books')
})

export { booksRoutes }

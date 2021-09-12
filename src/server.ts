import express, { Router } from 'express'

import { booksRoutes } from './routes/books.routes'

const app = express()

const router = new Router()
router.use('/books', booksRoutes)

app.use(express.json())
app.use(router)

app.listen(3333, () => { console.log('Server running on port 3333') })

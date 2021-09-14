import { Request, Response } from 'express'

import { ListBooksService } from './listBooksService'

class ListBooksController {
  constructor (private listBooksService: ListBooksService) {}

  handle (request: Request, response: Response) {
    const books = this.listBooksService.execute()

    return response.status(200).json(books)
  }
}

export { ListBooksController }

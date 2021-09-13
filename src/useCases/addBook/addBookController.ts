import { Request, Response } from 'express'

import { AddBookService } from './addBookService'

class AddBookController {
  constructor (private addBookService: AddBookService) {}

  handle (request: Request, response: Response) {
    const { title, authors, publisher, image } = request.body

    this.addBookService.execute({ title, authors, image, publisher })

    return response.status(201).send()
  }
}

export { AddBookController }

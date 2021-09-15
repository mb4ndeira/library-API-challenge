import { Request, Response } from 'express'

import { UpdateBookService } from './updateBookService'

class UpdateBookController {
  constructor (private updateBookService: UpdateBookService) {}

  handle (request: Request, response: Response) {
    const { id, title, authors, publisher, image } = request.body

    const book = this.updateBookService.execute({ id, title, authors, image, publisher })

    return response.status(204).json(book)
  }
}

export { UpdateBookController }

import { Request, Response } from 'express'

import { DeleteBookService } from './deleteBookService'

class DeleteBookController {
  constructor (private deleteBookService: DeleteBookService) {}

  handle (request: Request, response: Response) {
    const { id } = request.body

    this.deleteBookService.execute({ id })

    return response.status(204).send()
  }
}

export { DeleteBookController }

import { v4 as uuid } from 'uuid'

class Book {
    id?:number;
    title:string;
    publisher:string;
    image:string;
    authors:string[];

    constructor () {
      if (!this.id) this.id = uuid()
    }
}

export { Book }

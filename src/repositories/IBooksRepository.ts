import { Book } from '../models/Book'

interface IAddBookDTO {
    title:string;
    publisher:string;
    image:string;
    authors:string[];
}

interface IGetAllWithTitleDTO {
    title:string;
}

interface IBooksRepository {
    add({ title, publisher, image, authors }: IAddBookDTO): void
    findById(id: string): Book
    getAll(): Book[]
    delete(id: string): void
    getAllWithTitle({ title }: IGetAllWithTitleDTO): Book[]
}

export { IBooksRepository, IAddBookDTO, IGetAllWithTitleDTO }

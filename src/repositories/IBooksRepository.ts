interface IAddBookDTO {
    title:string;
    publisher:string;
    image:string;
    authors:string[];
}

interface IBooksRepository {
    add({ title, publisher, image, authors }: IAddBookDTO): void
}

export { IBooksRepository, IAddBookDTO }

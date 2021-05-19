import { Request, Response } from "express";
import { BooksService } from "../services/BooksServices";

class BooksController {
  async create(request: Request, response: Response): Promise<Response> {
    const { search_value } = request.body;
    const booksService = new BooksService();
    const { items } = await booksService.getBooks(search_value);

    let booksReturned = [];

    for (let i = 0; i < items.length; i++) {
      const book = items[i];
      const volumeInfo = book.volumeInfo;

      let id = book.id;
      let thumbnail = "";
      let { title, description, publishedDate } = volumeInfo;

      if ("imageLinks" in volumeInfo) {
        thumbnail = volumeInfo.imageLinks.thumbnail;
      };

      const resume = {
        id: id,
        thumbnail: thumbnail,
        title: title,
        description: description,
        publishedDate: publishedDate
      }

      booksReturned.push(resume);

    }
    return response.send(JSON.stringify(booksReturned));
  }
}

export { BooksController };
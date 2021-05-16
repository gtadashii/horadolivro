import { Request, Response } from "express";
import { BooksService } from "../services/BooksServices";

class BooksController {
  async create(request: Request, response: Response) {
    const { search_value } = request.body;
    const booksService = new BooksService();

    const resultados = await booksService.getBooks(search_value);

    return response.json(resultados);
  }
}

export { BooksController };
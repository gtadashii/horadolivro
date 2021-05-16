import { Router } from "express";
import { BooksController } from "./controllers/BooksController";

const routes = Router();

const booksController = new BooksController();

routes.post("/search", booksController.create);

export { routes };

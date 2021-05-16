import * as dotenv from 'dotenv';
import axios from "axios";

dotenv.config();

class BooksService {
  private apiKey;

  constructor() {
    this.apiKey = process.env.GOOGLE_API_KEY;
  }

  async getBooks(search_value: string) {
    const query = search_value.replace(" ", "+").toLowerCase();
    const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${this.apiKey}`);
    const { items } = data;

    return items;
  }

}

export { BooksService };
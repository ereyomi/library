import { Injectable } from '@angular/core';

import booksJson from 'src/assets/database/books.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookDatas = booksJson;
  constructor() { }

  getAllBooks() {
    return this.bookDatas;
  }
  search(search: string) {
    console.log('searching:', search);
    return this.getAllBooks().filter(
      data => (data.name.toLowerCase() === search.toLowerCase())
    );
  }
  getBook(id: number) {
    return this.bookDatas.find(
      (data) => data.id === id
    );
  }


}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryapiService {
  private domain = 'http://127.0.0.1:8000/api';
  private book = 'book';
  private users = 'users';
  query: string;
  searchResult: any;
  constructor(private http: HttpClient) { }

  getBooks(pageNumber) {
    this.query = `${this.domain}/${this.book}?page=${pageNumber}`;
    console.log(this.query);
    return this.http.get(this.query);
  }
  getOneBook(bookId: number) {
    this.query = `${this.domain}/${this.book}/${bookId}`;
    console.log(this.query);
    return this.http.get(this.query);
  }
  search(text) {

    const postData = {
      search: text
    };

    const  options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

    this.query = `${this.domain}/search`;
    console.log(this.query);

    this.searchResult = this.http.post(this.query, postData, options);
    return this.searchResult;

  }
}

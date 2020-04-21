import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LibraryapiService {
  private domain = 'http://127.0.0.1:8000/api';
  private book = 'books';
  private users = 'users';
  query: string;
  searchResult: any;
  backHref: any;
  loginResult: any;
  loginUser: any;
  loginToken: any;
  bookData: any;
  options: any;
  Authorization: any;
  postData: { email: string; password: string; };
  constructor(private http: HttpClient) { }

  getBooks(pageNumber) {
    this.query = `${this.domain}/books?page=${pageNumber}`;
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
  login(myemail: string, mypassword: string) {

    this.postData = {
      email: myemail,
      password: mypassword,
    };

    this.options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

    this.query = `${this.domain}/login`;
    console.log(this.query);

    this.loginResult = this.http.post(this.query, this.postData, this.options);
    return this.loginResult;
  }
  checkLoggedIn(): boolean {
    if (this.loginToken) {
      return true;
    } else {
      return false;
    }
  }
  postBook(bookname, bookDescription, bookcover, college, imgp) {
    /* details such as the user_id is gotten when user signin */

    // this.loginUser.user.id
    /* FormData is used for posting File (check javaScript fetch -- postman) */
    const bookFormData = new FormData();
    bookFormData.append('name', bookname);
    bookFormData.append('description', bookDescription);
    bookFormData.append('cover', bookcover, `${imgp}`);
    bookFormData.append('college_id', college);
    bookFormData.append('user_id', `${5}`);

    this.query = `${this.domain}/storebook`;
    console.log(this.query);

    console.log('bookdata: ', bookFormData);

    return this.http.post(this.query, bookFormData);
  }
}

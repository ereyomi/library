import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from 'src/app/api/book.service';
import { LibraryapiService } from 'src/app/api/libraryapi.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {
bookId: number;
bookData: any;
rawApiData: any;
localhost = 'http://127.0.0.1:8000/img';
  constructor(
    private route: ActivatedRoute,
    private bS: BookService,
    private api: LibraryapiService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
          this.bookId = +params.id;
          console.log('bookId: ', this.bookId);
          // this.bookData = this.bS.getBook(this.bookId);
          this.api.getOneBook(this.bookId).subscribe(
            data => {
              this.rawApiData = data;
              this.bookData = this.rawApiData.data;
              console.log('bookdetails: ', this.bookData);
            }
          );
      }
    );
  }


}

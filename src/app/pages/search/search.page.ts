import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/api/book.service';
import { LibraryapiService } from 'src/app/api/libraryapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchResult: any;
  rawApiData: any;
  localhost = 'http://127.0.0.1:8000/img';
  constructor(private bS: BookService, private api: LibraryapiService) { }

  ngOnInit() {
  }
  searchIt(event) {
    console.log(event.target.value);
    // this.searchResult = this.bS.search(event.target.value);
    this.api.search(event.target.value).subscribe(
      data => {
        this.rawApiData = data;
        this.searchResult = this.rawApiData.data;
        console.log(this.searchResult);
      }
    );
  }

}

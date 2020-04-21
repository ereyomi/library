import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/api/book.service';
import { LibraryapiService } from 'src/app/api/libraryapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchResult: any;
  rawApiData: any;
  localhost = 'http://127.0.0.1:8000/img';
  backHref = '/tabs/search';
  constructor(private bS: BookService,
              private api: LibraryapiService,
              private router: Router) {
    this.api.backHref = this.backHref;
  }

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
  openDetails(id: number) {
    console.log(id);
    this.router.navigateByUrl(`/details/${id}`);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../api/book.service';
import { LibraryapiService } from '../api/libraryapi.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  bookdatas: any;
  rawApiData: any;
  moreData: any;
  totalpages: any;
  currentPage = 1;
  dataList: any;
  localhost = 'http://127.0.0.1:8000/img';
  backHref = '/tabs/home';
  constructor(
    private router: Router,
    private bS: BookService,
    private api: LibraryapiService) {
      this.dataList = [];
      this.api.backHref = this.backHref;
    }

  ngOnInit() {
       // this.bookdatas = this.bS.getAllBooks();
       // console.log(this.bookdatas);
       this.loadApiData();
  }
  openDetails(id: number) {
    console.log(id);
    this.router.navigateByUrl(`/details/${id}`);
  }
  storeApiData(data) {
    this.rawApiData = data;
    this.moreData = this.rawApiData.data.data;
    this.totalpages = this.rawApiData.data.last_page;
    this.currentPage = this.rawApiData.data.current_page;
    console.log(this.moreData);
    console.log('totalpage: ', this.totalpages);
    console.log('Currentpage: ', this.currentPage);
    this.moreData.forEach(book => {
      this.dataList.push(book);
      console.log(book);
    });
    console.log('datalist', this.dataList);
  }

  loadApiData(pageNumber = 1) {
    this.api.getBooks(pageNumber).subscribe(
      data => {
        this.storeApiData(data);
      },
      (err) => {
        console.log('an error occur while trying to get books');
      }
    );
  }
  loadMoreData(event) {
    // this.loadApiData(++this.currentPage);

    this.api.getBooks(++this.currentPage).subscribe(
      data => {
        this.storeApiData(data);
        /* this is to stop the loader */
        event.target.complete();
        console.log('ok');
      },
      (err) => {
        console.log('an error occur while trying to get books');
      }
    );
        /* this is to disable infiite scroll */
    // event.target.disabled = true or false;
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  loadMore() {
    console.log('total pages: ', this.totalpages);
    console.log('current page: ', this.currentPage);
  }
  async doRefresh(event) {
    this.dataList = [];
    await this.loadApiData();
    console.log('refreshing');
    setTimeout(() => {
      event.target.complete();
    }, 3000);
  }
}

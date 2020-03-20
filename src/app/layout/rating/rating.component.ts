import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {

  @Input() public starRating: any;
  star: number;
  starOutline: number;

  constructor() { }

  ngOnInit() {

    if (this.starRating > 0) {
      this.star = this.starRating;
      if (this.star < 5) {
        this.starOutline = 5 - this.star;
      } else {
        this.starOutline = 0;
      }
    }
  }

  counter(i: number): any[] {
    return new Array(i);
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-loader',
  templateUrl: './content-loader.component.html',
  styleUrls: ['./content-loader.component.scss'],
})
export class ContentLoaderComponent implements OnInit {
  @Input() type: number;
  constructor() { }

  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
name = 'Efe Obakponovwe';
image = 'assets/about/her.jpg';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  signInPage() {
    this.router.navigateByUrl(`/signin`);
  }

}

import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryapiService } from 'src/app/api/libraryapi.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit, DoCheck {
name = 'Efe Obakponovwe';
image = 'assets/about/her.jpg';
isSignedIn: any;
  username: any;
  constructor(private router: Router, private api: LibraryapiService) {}

  ngOnInit() {}
  ngDoCheck() {
    if (this.api.checkLoggedIn()) {
      this.isSignedIn = this.api.checkLoggedIn();
      this.username = this.api.loginUser.user.name;
      console.log(this.isSignedIn);
    }
  }
  signInPage() {
    this.router.navigateByUrl(`/signin`);
  }
  signOut() {
    this.isSignedIn = false;
    this.api.loginToken = '';
    this.signInPage();
  }

}

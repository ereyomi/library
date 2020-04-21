import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LibraryapiService } from 'src/app/api/libraryapi.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
name = 'Efe Obakponovwe';
image = 'assets/about/her.jpg';
isSignedIn: any;
  username = '';
  constructor(private router: Router,
              private api: LibraryapiService,
              private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.data.subscribe(
      (data) => {
        /* if data returns true */
        console.log(data, data.data);
        if (data.data) {
          this.isSignedIn = data.data;
          this.username = this.api.loginUser.user.name;
        } else {
          this.isSignedIn = data.data;
          this.username = '';
        }
      }
    );
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

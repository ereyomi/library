import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LibraryapiService } from './libraryapi.service';

@Injectable({
  providedIn: 'root'
})
export class SigninResolver implements Resolve<any> {
    isSignedIn: boolean;

  constructor(private api: LibraryapiService) { }
  resolve() {
    return this.checkUserLoggedIn();
  }
  checkUserLoggedIn() {
    if (this.api.checkLoggedIn()) {
        return true;
      } else {
        return false;
      }
  }
}

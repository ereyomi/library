import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { LibraryapiService } from 'src/app/api/libraryapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  private signInForm: FormGroup;

  token: any;
  logintoken: any;
  showPassword: boolean;
  showIcon = 'eye';
  constructor(
    private fb: FormBuilder,
    private alertC: AlertController,
    private toastC: ToastController,
    private api: LibraryapiService,
    private router: Router,
    ) {
      this.showPassword = false;
    }

  theForm() {
      this.signInForm = this.fb.group({
        signInEmail: ['', [Validators.required, Validators.email]],
        signInPassword: ['', [Validators.required, Validators.minLength(8)]],
      });
    }

    async presentToast(mymessage) {
      const toast = await this.toastC.create({
        message: mymessage,
        duration: 2000,
      });
      toast.present();
    }
  async presentAlert(headerText: any, mymessage: any) {
    const alert = await this.alertC.create({
      header: headerText,
      // subHeader: 'hmmm',
      message: mymessage,
      buttons: [
        {
          text: 'cancle',
          role: 'ok',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('hmmm');
          }
        }
      ]
    });
    await alert.present();
  }
  ngOnInit() {
    this.theForm();
  }

  submitForm() {
    console.log(this.signInForm.value);
    this.api.login(
      this.signInForm.value.signInEmail,
      this.signInForm.value.signInPassword).subscribe(
      data => {
        this.api.loginUser = data;

        console.log(this.api.loginUser);

        this.logintoken = this.api.loginUser.access_token;

        this.api.loginToken = this.logintoken;

        console.log(this.logintoken);
        if (typeof this.logintoken !== null) {
          const message = 'sucessfully logged in';
          this.presentToast(message);
          // this.gotoAbout();
        }
      },
      (err) => {
        console.log(err.err);
      }
    );
    // this.theForm();
  }
  gotoAbout() {
    this.router.navigateByUrl(`/tabs/about`);
  }

  showPassWord() {
    this.showPassword = !this.showPassword;
    console.log(this.showPassword);
    (this.showPassword === false) ? this.showIcon = 'eye-off' : this.showIcon = 'eye';
  }
}

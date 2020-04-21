import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { LibraryapiService } from 'src/app/api/libraryapi.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  message = {
    success: 'sucessfully logged in',
    failure: 'Please check your credecial'
  };
  @ViewChild('signinBtn', {static: false}) signinBtn: ElementRef;
  toSubmit: any;
  constructor(
    private fb: FormBuilder,
    private alertC: AlertController,
    private toastC: ToastController,
    private api: LibraryapiService,
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef,
    private route: ActivatedRoute
    ) {
      this.showPassword = this.toSubmit = false;
    }

    ngOnInit() {
      this.route.data.subscribe(
        (data) => this.toSubmit = data.data
      );
      this.theForm();
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

  submitForm() {
    console.log(this.signInForm.value);
    /* to disable signin btn */
    this.toSubmit = true;

    this.api.login(
      this.signInForm.value.signInEmail,
      this.signInForm.value.signInPassword).subscribe(
      data => {
        this.api.loginUser = data;

        console.log(this.api.loginUser);

        this.logintoken = this.api.loginUser.access_token;

        this.api.loginToken = this.logintoken;

        console.log(this.logintoken, typeof this.logintoken);
        if (typeof this.logintoken !== 'undefined') {

          this.presentToast(this.message.success);
          this.gotoAbout();
        } else {
          /* to disable signin btn */
          this.toSubmit = false;
          if (this.api.loginUser.message) {
            this.presentToast(this.api.loginUser.message);
          } else {
            this.presentToast(this.message.failure);
          }
        }
      },
      (err) => {
        /* to disable signin btn */
        this.toSubmit = false;
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

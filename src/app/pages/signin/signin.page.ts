import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  private signInForm: FormGroup;
  constructor(private fb: FormBuilder, private alertC: AlertController) { }

  theForm() {
      this.signInForm = this.fb.group({
        signInEmail: ['', [Validators.required, Validators.email]],
        signInPassword: ['', [Validators.required, Validators.minLength(8)]],
      });
    }
  async presentAlert() {
    const alert = await this.alertC.create({
      header: 'teat',
      subHeader: 'hmmm',
      message: 'ok ',
      buttons: ['good']
    });
    await alert.present();
  }
  ngOnInit() {
    this.theForm();
  }

  submitForm() {
    console.log(this.signInForm.value);
    this.theForm();
  }
}

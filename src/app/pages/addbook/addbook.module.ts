import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbookPageRoutingModule } from './addbook-routing.module';

import { AddbookPage } from './addbook.page';
import { BookformComponent } from 'src/app/layout/bookform/bookform.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddbookPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AddbookPage, BookformComponent]
})
export class AddbookPageModule {}

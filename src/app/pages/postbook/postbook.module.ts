import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostbookPageRoutingModule } from './postbook-routing.module';

import { PostbookPage } from './postbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostbookPageRoutingModule
  ],
  declarations: [PostbookPage]
})
export class PostbookPageModule {}

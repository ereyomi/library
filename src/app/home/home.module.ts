import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule} from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { RatingModule } from '../layout/rating/rating.module';
import { ContentLoaderComponent } from '../layout/content-loader/content-loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    RatingModule
  ],
  declarations: [HomePage, ContentLoaderComponent]
})
export class HomePageModule {}

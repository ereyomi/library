import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostbookPage } from './postbook.page';

const routes: Routes = [
  {
    path: '',
    component: PostbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostbookPageRoutingModule {}

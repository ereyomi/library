import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AuthGuard } from 'src/app/api/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/tabs/home', pathMatch: 'full' },
  {
    path: 'tabs',
    component: TabsPage,
    children: [

      { path: 'home',
        loadChildren: () => import('src/app/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('src/app/pages/search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('src/app/pages/about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'addbook',
        loadChildren: () => import('src/app/pages/addbook/addbook.module').then( m => m.AddbookPageModule),
        canActivateChild: [AuthGuard],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

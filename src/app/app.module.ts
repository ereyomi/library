import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsPageRouterModule } from './pages/tabs/tabs-page-router.module';

/* import { HttpClientModule } from '@angular/common/http'; */
import { BookService } from './api/book.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LibraryapiService } from './api/libraryapi.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    TabsPageRouterModule,
    HttpClientModule,
    // HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BookService,
    LibraryapiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

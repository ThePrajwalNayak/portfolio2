import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { StickyNavModule } from 'ng2-sticky-nav';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    Ng2PageScrollModule,
    StickyNavModule
  ],
  providers: [{provide : LocationStrategy, useClass : HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

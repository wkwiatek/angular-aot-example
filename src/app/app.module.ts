import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  template: `Home component`
})
class HomeComponent {}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule'}
    ]),
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}

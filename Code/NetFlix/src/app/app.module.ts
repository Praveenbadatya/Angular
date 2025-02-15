import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovielineComponent } from './movieline/movieline.component';
import { MoviesComponent } from './movieline/movies/movies.component';
import { LoginButtonComponent } from './login-button/login-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MovielineComponent,
    MoviesComponent,
    LoginButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

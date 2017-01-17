import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {Router} from '@angular/router';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BasketComponent } from './basket/basket.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { FilterFieldPipe } from './pipes/filter-field.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HomeComponent,
    ContactComponent,
    BookDetailsComponent,
    BasketComponent,
    ProfileComponent,
    LoginComponent,
    FilterFieldPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

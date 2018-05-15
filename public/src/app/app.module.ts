import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AuthorQuotesComponent } from './author-quotes/author-quotes.component';
import { AuthorsComponent } from './authors/authors.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuoteComponent,
    AddAuthorComponent,
    AuthorQuotesComponent,
    AuthorsComponent,
    PageNotFoundComponent,
    EditAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

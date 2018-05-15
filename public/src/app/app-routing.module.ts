import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AuthorQuotesComponent } from './author-quotes/author-quotes.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { AuthorsComponent } from './authors/authors.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "", component: AuthorsComponent},
  {path: "new", component: AddAuthorComponent},
  {path: "quotes/:id", component: AuthorQuotesComponent},
  {path: "edit/:id", component: EditAuthorComponent},
  {path: "write/:id", component: AddQuoteComponent},
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

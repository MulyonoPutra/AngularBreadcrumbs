import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './sharing-data/parent/parent.component';
import { Book1Component } from './stores/books/book1/book1.component';
import { Book2Component } from './stores/books/book2/book2.component';
import { Book3Component } from './stores/books/book3/book3.component';
import { BooksComponent } from './stores/books/books.component';
import { StoresComponent } from './stores/stores.component';

const routes: Routes = [

  { path: 'parent', component: ParentComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'stores',
    component: StoresComponent,
    children: [
      { path: 'books', component: BooksComponent },
      { path: 'books/book1', component: Book1Component },
      { path: 'books/book2', component: Book2Component },
      { path: 'books/book3', component: Book3Component },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
exports: [RouterModule],
})
export class AppRoutingModule {}

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './stores/books/books.component';
import { Book1Component } from './stores/books/book1/book1.component';
import { Book2Component } from './stores/books/book2/book2.component';
import { Book3Component } from './stores/books/book3/book3.component';
import { StoresComponent } from './stores/stores.component';
import { MenuService } from './menu.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ParentComponent } from './sharing-data/parent/parent.component';
import { ChildComponent } from './sharing-data/child/child.component';
import { ChildTwoComponent } from './sharing-data/child-two/child-two.component';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    Book1Component,
    Book2Component,
    Book3Component,
    StoresComponent,
    ParentComponent,
    ChildComponent,
    ChildTwoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
  ],
  providers: [MenuService, DataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

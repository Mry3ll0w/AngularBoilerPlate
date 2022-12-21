import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { FrecuentedQuestionsComponent } from './frecuented-questions/frecuented-questions.component';
import { HomeComponent } from './home/home.component';
import { ItemcardComponent } from './itemcard/itemcard.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { path: 'card', component: ItemcardComponent},
  { path: '', component: HomeComponent},
  { path: 'faq', component: FrecuentedQuestionsComponent},
  { path: 'location', component: LocationComponent},
  { path: 'libros', component: BooksComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

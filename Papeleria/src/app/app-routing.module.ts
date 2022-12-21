import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { FrecuentedQuestionsComponent } from './frecuented-questions/frecuented-questions.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { path: 'cosas', component: ExampleComponent},
  { path: '', component: HomeComponent},
  { path: 'faq', component: FrecuentedQuestionsComponent},
  { path: 'location', component: LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

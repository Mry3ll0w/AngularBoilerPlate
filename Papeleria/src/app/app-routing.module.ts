import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { FrecuentedQuestionsComponent } from './frecuented-questions/frecuented-questions.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'cosas', component: ExampleComponent},
  { path: '', component: HomeComponent},
  { path: 'preguntasFrecuentes', component: FrecuentedQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'cosas', component: ExampleComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

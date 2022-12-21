import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { HomeComponent } from './home/home.component';
import { CatalogcardComponent } from './catalogcard/catalogcard.component';
import { FrecuentedQuestionsComponent } from './frecuented-questions/frecuented-questions.component';
import { LocationComponent } from './location/location.component';
import { ServicesComponent } from './services/services.component';
import { BooksComponent } from './books/books.component';
import { GOOGLE_MAPS_API_CONFIG, NgMapsGoogleModule } from '@ng-maps/google';
import { ItemcardComponent } from './itemcard/itemcard.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    HomeComponent,
    CatalogcardComponent,
    FrecuentedQuestionsComponent,
    LocationComponent,
    ServicesComponent,
    BooksComponent,
    ItemcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMapsGoogleModule
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

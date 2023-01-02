import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgMapsCoreModule } from '@ng-maps/core';
import { NgMapsGoogleModule } from '@ng-maps/google';
import { CommonModule } from '@angular/common';
import { GOOGLE_MAPS_API_CONFIG } from '@ng-maps/google';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
    provide: GOOGLE_MAPS_API_CONFIG,
    useValue: {
      apiKey: 'AIzaSyBdDrWnYkcr0dYZrC1AlmRW-Hsx47XuBSQ'
    }
}
  ]
})
export class LocationModule { }

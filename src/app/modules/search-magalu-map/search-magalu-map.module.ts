import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';
import { environment } from '@env/environment';

import { SearchMagaluMapRoutingModule } from './search-magalu-map-routing.module';
import { SearchMagaluMapComponent } from './search-magalu-map.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchMagaluMapComponent],
  exports: [SearchMagaluMapComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.REACT_APP_TOKEN_MAPS,
      libraries: ['places']
    }),
    SearchMagaluMapRoutingModule
  ]
})
export class SearchMagaluMapModule { }

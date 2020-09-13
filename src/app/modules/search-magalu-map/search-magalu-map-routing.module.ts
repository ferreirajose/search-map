import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchMagaluMapComponent } from './search-magalu-map.component';

const routes: Routes = [
  {
    path: "",
    component: SearchMagaluMapComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchMagaluMapRoutingModule { }

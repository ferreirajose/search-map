import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'home',
  loadChildren: () => import('@modules/search-magalu-map/search-magalu-map.module').then(m => m.SearchMagaluMapModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

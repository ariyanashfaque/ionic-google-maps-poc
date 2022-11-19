import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMapPage } from './add-map.page';

const routes: Routes = [
  {
    path: '',
    component: AddMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMapPageRoutingModule {}

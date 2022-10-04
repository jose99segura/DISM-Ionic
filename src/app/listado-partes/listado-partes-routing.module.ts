import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoPartesPage } from './listado-partes.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoPartesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoPartesPageRoutingModule {}

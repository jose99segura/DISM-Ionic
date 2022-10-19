import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerPartesPage } from './ver-partes.page';

const routes: Routes = [
  {
    path: '',
    component: VerPartesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerPartesPageRoutingModule {}

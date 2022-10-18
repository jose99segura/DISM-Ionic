import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoPartePage } from './nuevo-parte.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoPartePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoPartePageRoutingModule {}

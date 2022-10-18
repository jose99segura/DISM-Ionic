import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPartePage } from './editar-parte.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPartePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPartePageRoutingModule {}

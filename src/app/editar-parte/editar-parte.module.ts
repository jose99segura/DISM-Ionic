import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPartePageRoutingModule } from './editar-parte-routing.module';

import { EditarPartePage } from './editar-parte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPartePageRoutingModule
  ],
  declarations: [EditarPartePage]
})
export class EditarPartePageModule {}

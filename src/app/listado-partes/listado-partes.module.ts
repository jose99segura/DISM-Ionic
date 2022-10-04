import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoPartesPageRoutingModule } from './listado-partes-routing.module';

import { ListadoPartesPage } from './listado-partes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoPartesPageRoutingModule
  ],
  declarations: [ListadoPartesPage]
})
export class ListadoPartesPageModule {}

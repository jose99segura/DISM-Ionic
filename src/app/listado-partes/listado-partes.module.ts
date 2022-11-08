import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoPartesPageRoutingModule } from './listado-partes-routing.module';

import { ListadoPartesPage } from './listado-partes.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoPartesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ListadoPartesPage]
})
export class ListadoPartesPageModule {}

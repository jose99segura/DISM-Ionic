import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerPartesPageRoutingModule } from './ver-partes-routing.module';

import { VerPartesPage } from './ver-partes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerPartesPageRoutingModule
  ],
  declarations: [VerPartesPage]
})
export class VerPartesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoPartePageRoutingModule } from './nuevo-parte-routing.module';

import { NuevoPartePage } from './nuevo-parte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoPartePageRoutingModule
  ],
  declarations: [NuevoPartePage]
})
export class NuevoPartePageModule {}

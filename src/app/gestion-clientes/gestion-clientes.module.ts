import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionClientesPageRoutingModule } from './gestion-clientes-routing.module';

import { GestionClientesPage } from './gestion-clientes.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionClientesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [GestionClientesPage]
})
export class GestionClientesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarSolicitudesPageRoutingModule } from './consultar-solicitudes-routing.module';

import { ConsultarSolicitudesPage } from './consultar-solicitudes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarSolicitudesPageRoutingModule
  ],
  declarations: [ConsultarSolicitudesPage]
})
export class ConsultarSolicitudesPageModule {}

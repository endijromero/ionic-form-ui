import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarSolicitudesPage } from './consultar-solicitudes.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarSolicitudesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarSolicitudesPageRoutingModule {}

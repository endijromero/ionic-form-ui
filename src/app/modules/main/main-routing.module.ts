import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPage } from './main.page';

const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'solicitudes', loadChildren: () => import('./solicitudes/solicitudes.module').then(m => m.SolicitudesPageModule) },
  { path: 'consultar-solicitudes', loadChildren: () => import('./consultar-solicitudes/consultar-solicitudes.module').then(m => m.ConsultarSolicitudesPageModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class MainPageRoutingModule { }

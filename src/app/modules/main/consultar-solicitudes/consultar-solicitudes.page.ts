import { Component, OnInit } from '@angular/core';
import { SolicitudModel } from '../../../share/models/SolicitudModel/solicitud-model';

@Component({
  selector: 'app-consultar-solicitudes',
  templateUrl: './consultar-solicitudes.page.html',
  styleUrls: ['./consultar-solicitudes.page.scss'],
})
export class ConsultarSolicitudesPage implements OnInit {

  _ListaSolicitudModel: SolicitudModel[] = [];

  constructor() { }

  ngOnInit() {
    this._ListaSolicitudModel = JSON.parse(localStorage.getItem("solicitudes"));

    console.log("ListaSolicitudModelTmp", this._ListaSolicitudModel);


  }

}

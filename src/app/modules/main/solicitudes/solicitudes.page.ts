import { Component, OnInit } from '@angular/core';
import { SolicitudModel } from '../../../share/models/SolicitudModel/solicitud-model';
import { Router } from '@angular/router';
import { AlertService } from '../../../share/services/alert/alert.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})

export class SolicitudesPage implements OnInit {
  descripcion: string;
  apartamento: string;
  bloque: string;
  _ListaSolicitudModel: SolicitudModel[] = [];
  _SolicitudModel: SolicitudModel = {};

  constructor(private router: Router, private alert: AlertService) { }

  ngOnInit() {
    let ListaSolicitudModelTmp = JSON.parse(localStorage.getItem("solicitudes"));
    if (ListaSolicitudModelTmp) {
      this._ListaSolicitudModel = ListaSolicitudModelTmp;
    }
  }

  crearSolicitud() {
    if (this._SolicitudModel.bloque !== "" || this._SolicitudModel.apartamento !== "" || this._SolicitudModel.descripcion !== "") {
      this._SolicitudModel.bloque = this.bloque;
      this._SolicitudModel.apartamento = this.apartamento;
      this._SolicitudModel.descripcion = this.descripcion;
      this._SolicitudModel.estado = "CREADA";

      this._ListaSolicitudModel.push(this._SolicitudModel);

      localStorage.setItem("solicitudes", JSON.stringify(this._ListaSolicitudModel));
    } else {
      this.alert.basicAlert("Información", "Diligencie los campos", ['Ok']);
    }


    this.router.navigate(['/main']);
  }
}

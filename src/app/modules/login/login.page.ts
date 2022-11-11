import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../share/models/User/UserModel';
import { AlertService } from '../../share/services/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  // token: string = '123456';
  // tokenAdmin: string = '1234567';
  correo: string;
  contrasena: string;
  _correo: string;
  _contrasena: string;
  user: UserModel = {};

  // rememberToggle: boolean

  constructor(private router: Router, private alert: AlertService) { }

  ngOnInit() {
    this._correo = localStorage.getItem('correo');
    this._contrasena = localStorage.getItem('contrasena');

    this.user = JSON.parse(localStorage.getItem("SessionUser"));

    // if (this.contrasena !== "" && this.correo !== "") {
    //   this.rememberToggle = true
    // }
  }

  login() {
    if ((this.contrasena !== "" && this.correo !== "") && (this.contrasena !== undefined && this.correo !== undefined)) {
      if (this.user.password === this.contrasena && this.user.email === this.correo) {
        localStorage.setItem('correo', this.correo);
        localStorage.setItem('contrasena', this.contrasena);

        this.router.navigate(["/main"]);
      } else {
        this.alert.basicAlert("Información", "Usuario no registrado / Datos incorrectos", ['Ok']);
      }
    } else {
      this.alert.basicAlert("Información", "Diligencie los campos", ['Ok']);
    }
  }

  toggleRemember(event) {
    console.log("event", JSON.stringify(event));
    console.log("event_complete", event);

    // localStorage.getItem('correo');
    // localStorage.getItem('contrasena');

    if (event.detail.checked) {
      this.correo = localStorage.getItem('correo');
      this.contrasena = localStorage.getItem('contrasena');
    } else {
      // document.body.setAttribute('color-theme', 'light');
    }
  }

  // async presentAlert(Input_message) {
  //   const alert = await this.alert.create({
  //     header: 'Información',
  //     subHeader: '',
  //     message: Input_message,
  //     buttons: ['OK'],
  //   });

  //   await alert.present();
  // }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  token: string = '123456';
  tokenAdmin: string = '1234567';
  correo: string;
  contrasena: string;
  rememberToggle: boolean

  constructor(private router: Router, private alert: AlertController) { }

  ngOnInit() {
    // this.correo = localStorage.getItem('correo');
    // this.contrasena = localStorage.getItem('contrasena');

    // if (this.contrasena !== "" && this.correo !== "") {
    //   this.rememberToggle = true
    // }
  }

  login() {
    if (this.contrasena !== "" && this.correo !== "") {
      if (this.token === this.contrasena) {
        localStorage.setItem('token', this.token);
        localStorage.setItem('correo', this.correo);
        localStorage.setItem('contrasena', this.contrasena);

        console.log('token', this.token);
        console.log('correo', this.correo);

        this.router.navigate(["/main"]);
      } else {
        this.presentAlert("Datos incorrectos");
        console.log("Datos incorrectos");
      }
    } else {
      this.presentAlert("Diligencie los campos");
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

  async presentAlert(Input_message) {
    const alert = await this.alert.create({
      header: 'Información',
      subHeader: '',
      message: Input_message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../share/models/User/UserModel';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {
  name: string;
  lastName: string;
  email: string;
  password: string;
  user: UserModel = {};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registrar() {
    this.user.name = this.name;
    this.user.lastName = this.lastName;
    this.user.email = this.email;
    this.user.password = this.password;

    localStorage.setItem("SessionUser", JSON.stringify(this.user));

    this.router.navigate(['/login']);
  }
}

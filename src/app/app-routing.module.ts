import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomePageModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginPageModule) },
  { path: 'registration', loadChildren: () => import('./modules/registration/registration.module').then(m => m.RegistrationPageModule) },
  { path: 'forgot-password', loadChildren: () => import('./modules/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule) },
  { path: 'main', loadChildren: () => import('./modules/main/main.module').then(m => m.MainPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { FilhotesComponent } from './filhotes/filhotes.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FinalizaComponent } from './finaliza/finaliza.component';
import { FilhotesAddComponent } from './filhotes-add/filhotes-add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/filhotes',
    pathMatch: 'full'
  },
  {
    path: 'filhotes',
    component: FilhotesComponent
  },
  {
    path: 'filhotesAdd',
    component: FilhotesAddComponent
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent
  },
  {
    path: 'finaliza',
    component: FinalizaComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilhotesComponent } from './filhotes/filhotes.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FinalizaComponent } from './finaliza/finaliza.component';
import { AuthService } from './auth.service';
import { FilhotesService } from './filhotes.service';
import { HttpClientModule } from '@angular/common/http';
import { FilhotesAddComponent } from './filhotes-add/filhotes-add.component';

@NgModule({
  declarations: [
    AppComponent,
    FilhotesComponent,
    CarrinhoComponent,
    LoginComponent,
    RegisterComponent,
    FinalizaComponent,
    FilhotesAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, FilhotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

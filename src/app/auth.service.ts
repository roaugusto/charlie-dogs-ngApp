import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:3000/api/";

  private _registerUrl = this.baseUrl + "register";
  private _loginUrl = this.baseUrl + "login";
  private _anonymousUserUrl = this.baseUrl + "setAnonymousToken";

  constructor(
    private http: HttpClient,
    private _router: Router
  ) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/filhotes'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  setToken() {
    return this.http.post<any>(this._anonymousUserUrl, "")
  }

}

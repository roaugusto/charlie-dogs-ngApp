import { Component, OnInit } from '@angular/core';
import { FilhotesService } from '../filhotes.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-filhotes',
  templateUrl: './filhotes.component.html',
  styleUrls: ['./filhotes.component.css']
})
export class FilhotesComponent implements OnInit {

  animals = [];
  query = "";
  filhote = {};

  constructor(
    private _filhoteService: FilhotesService,
    private _authService: AuthService
  ) { }

  ngOnInit() {

    this.getAll();

  }

  getAll() {
    this._filhoteService.getFilhotes()
      .subscribe(
        res => {
          //console.log('animals: ', res)
          this.animals = res
        },
        err => console.log(err)
      )
  }

  search() {
    this._filhoteService.searchFilhote(this.query)
      .subscribe(
        res => this.animals = res,
        err => console.log(err)
      )
  }

  async comprarAnimal(filhote) {

    let token = await this.getToken();
    //console.log('token ', token)

    // console.log('teste: ', filhote)
    this._filhoteService.comprarFilhote(filhote, token)
      .subscribe(
        res => {
          console.log(res)
          this.getAll();
        },
        err => console.log(err)
      )
  }

  getToken() {

    let token = localStorage.getItem('token')

    if (!token) {
      //console.log('Token not found')
      token = ""
      this.setToken()
    }
    // else{
    //   console.log('token: ', token)
    // }

    return token
  }

  setToken() {
    this._authService.setToken()
      .subscribe(
        res => {
          //console.log(res)
          localStorage.setItem('token', res.token)
        },
        err => console.log(err)
      )

  }

}

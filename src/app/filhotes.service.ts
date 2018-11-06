import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FilhotesService {

  //private baseUrl = "http://localhost:3000/api/";
  private baseUrl = "https://charlie-dogs-server-peniieyfzm.now.sh/api/";
  private _getAll = this.baseUrl + "getAllAnimals";
  private _search = this.baseUrl + "searchAnimal";
  private _createAnimal = this.baseUrl + "setAnimal"
  private _buyAnimal = this.baseUrl + "buyAnimal"

  constructor(private http: HttpClient) { }

  getFilhotes() {
    return this.http.get<any>(this._getAll)
  }

  searchFilhote(query: string) {

    let params = new HttpParams().set('query', query)
    return this.http.get<any>(this._search, { params })

  }

  createFilhote(filhote) {
    return this.http.post<any>(this._createAnimal, filhote)
  }

  comprarFilhote(filhote, token) {

    //let params = new HttpParams().set('token', token)

    return this.http.post<any>(this._buyAnimal, { animal: filhote, token: token })
  }

}

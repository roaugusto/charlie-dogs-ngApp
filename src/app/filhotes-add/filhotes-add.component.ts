import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilhotesService } from '../filhotes.service';


@Component({
  selector: 'app-filhotes-add',
  templateUrl: './filhotes-add.component.html',
  styleUrls: ['./filhotes-add.component.css']
})
export class FilhotesAddComponent implements OnInit {

  filhotesData = { raca: "", image: "", dtNasc: "", sexo: "", valor: "", }
  constructor(
    private _filhoteService: FilhotesService,
    private _router: Router
  ) { }

  ngOnInit() {

  }

  createFilhote() {

    this._filhoteService.createFilhote(this.filhotesData)
      .subscribe(
        res => {
          console.log(res)
          this._router.navigate(['/filhotes'])
        },
        err => console.log(err)
      )
  }

}

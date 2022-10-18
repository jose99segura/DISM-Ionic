import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parte } from '../models/parte';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-editar-parte',
  templateUrl: './editar-parte.page.html',
  styleUrls: ['./editar-parte.page.scss'],
})
export class EditarPartePage implements OnInit {

  id: number;
  data: Parte;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
    ) {
      this.data = new Parte();
    }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params =>{
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.usuario;
      }
    });
  }

  update(){
    this.apiService.updateItem(this.data.id, this.data).subscribe(response => {
      this.router.navigate(['listado-partes']);
    });
  }

}

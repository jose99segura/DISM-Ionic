import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Parte } from '../models/parte';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ver-partes',
  templateUrl: './ver-partes.page.html',
  styleUrls: ['./ver-partes.page.scss'],
})
export class VerPartesPage implements OnInit {

  id: number;
  data: Parte;

  constructor(
    public apiService: ApiService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
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

  editar(item){
    let navigationExtras: NavigationExtras = {
      state: {
        usuario: item
      }
    };
    this.router.navigate(['editar-parte'], navigationExtras);
  }

}

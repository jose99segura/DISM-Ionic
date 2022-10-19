import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ver-clientes',
  templateUrl: './ver-clientes.page.html',
  styleUrls: ['./ver-clientes.page.scss'],
})
export class VerClientesPage implements OnInit {

  id: number;
  data: Cliente;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
    ) {
      this.data = new Cliente();
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
    this.router.navigate(['editar-cliente'], navigationExtras);
  }

}

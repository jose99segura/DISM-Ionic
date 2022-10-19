import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.page.html',
  styleUrls: ['./editar-cliente.page.scss'],
})
export class EditarClientePage implements OnInit {

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

  update(){
    this.apiService.updateItemCliente(this.data.id, this.data).subscribe(response => {
      this.router.navigate(['gestion-clientes']);
    });
  }

}

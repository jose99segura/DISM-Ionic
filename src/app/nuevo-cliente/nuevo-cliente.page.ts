import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { Parte } from '../models/parte';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.page.html',
  styleUrls: ['./nuevo-cliente.page.scss'],
})
export class NuevoClientePage implements OnInit {

  data: Cliente;

  constructor(
    public router: Router,
    public apiService: ApiService
    ) {
      this.data = new Cliente();
    }

  ngOnInit() {
  }

  nuevoCliente(){
    // this.apiService.createItem(this.data).subscribe((response) => {
    //   this.router.navigate(['listado-partes']);
    // });
  }

}

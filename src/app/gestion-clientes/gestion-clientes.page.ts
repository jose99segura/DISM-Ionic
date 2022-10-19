import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.page.html',
  styleUrls: ['./gestion-clientes.page.scss'],
})
export class GestionClientesPage {

  ClienteData: any;

  constructor( public apiService: ApiService, private router: Router) {
    this.ClienteData = [];
  }

  ionViewWillEnter(){
    this.getAllPartes();
  }

  ver(item){
    let navigationExtras: NavigationExtras = {
      state: {
        usuario: item
      }
    };
    this.router.navigate(['ver-clientes'], navigationExtras);
  }

  getAllPartes(){
    this.apiService.getListCliente().subscribe(response =>{
      this.ClienteData = response;
    });
  }

  delete(cliente){
    this.apiService.deleteItemCliente(cliente.id).subscribe(response => {
      this.ClienteData = response;
    });
  }

  editar(cliente){
    let navigationExtras: NavigationExtras = {
      state: {
        usuario: cliente
      }
    };
    this.router.navigate(['editar-cliente'], navigationExtras);
  }

}

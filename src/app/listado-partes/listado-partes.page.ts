import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-listado-partes',
  templateUrl: './listado-partes.page.html',
  styleUrls: ['./listado-partes.page.scss'],
})
export class ListadoPartesPage {

  ParteData: any;
  constructor( public apiService: ApiService, private router: Router ) {
    this.ParteData = [];
  }

  ionViewWillEnter(){
    this.getAllPartes();
  }

  getAllPartes(){
    this.apiService.getList().subscribe(response =>{
      this.ParteData = response;
    });
  }

  delete(item){
    this.apiService.deleteItem(item.id).subscribe(response => {
      this.ParteData = response;
    });
  }

  // editar(item){
  //   let navigationExtras: NavigationExtras = {
  //     state: {
  //       usuario: item
  //     }
  //   };
  //   this.router.navigate(['editar'], navigationExtras);
  // }

}

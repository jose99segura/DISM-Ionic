import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.page.html',
  styleUrls: ['./nuevo.page.scss'],
})
export class NuevoPage {

  constructor() { }

  nuevoRegistro(){
    console.log('hola');

    // this.apiService.createItem(this.data).subscribe((response) => {
    //   this.router.navigate(['home']);
    // });
  }

}

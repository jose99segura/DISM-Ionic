import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


  nuevoRegistro(){
    console.log('hola');

    // this.apiService.createItem(this.data).subscribe((response) => {
    //   this.router.navigate(['home']);
    // });
  }

}

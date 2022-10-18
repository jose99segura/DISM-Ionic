import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-parte',
  templateUrl: './nuevo-parte.page.html',
  styleUrls: ['./nuevo-parte.page.scss'],
})
export class NuevoPartePage {

  constructor() { }

  nuevoParte(){
    console.log('hola');

    // this.apiService.createItem(this.data).subscribe((response) => {
    //   this.router.navigate(['home']);
    // });
  }

}

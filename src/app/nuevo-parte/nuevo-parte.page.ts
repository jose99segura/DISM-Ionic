import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parte } from '../models/parte';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-nuevo-parte',
  templateUrl: './nuevo-parte.page.html',
  styleUrls: ['./nuevo-parte.page.scss'],
})
export class NuevoPartePage implements OnInit {

  data: Parte;

  constructor(
    public router: Router,
    public apiService: ApiService
    ) {
      this.data = new Parte();
    }

  ngOnInit() {}

  nuevoParte(){
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['listado-partes']);
    });
  }

}

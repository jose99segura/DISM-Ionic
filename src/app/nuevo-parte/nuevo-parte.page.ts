import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parte } from '../models/parte';
import { ApiService } from '../services/api.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-nuevo-parte',
  templateUrl: './nuevo-parte.page.html',
  styleUrls: ['./nuevo-parte.page.scss'],
})
export class NuevoPartePage implements OnInit {

  data: Parte;
  latitude: any = 0;
  longitude: any = 0;

  options = {
    timeout: 10000,
    enableHighAccuracy: true,
    maximumAge: 3600
  };

  constructor(
    public router: Router,
    public apiService: ApiService,
    private geolocation: Geolocation
    ) {
      this.data = new Parte();
    }

  ngOnInit() {}

  nuevoParte(){
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['listado-partes']);
    });
  }

  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) =>{
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.data.latitud = resp.coords.latitude;
      this.data.longitud = resp.coords.longitude;
    }).catch((error) =>{
      console.log('Error obteniendo geolocalizacion', error);
    });
  }

}

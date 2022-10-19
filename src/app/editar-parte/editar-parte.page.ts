import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parte } from '../models/parte';
import { ApiService } from '../services/api.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-editar-parte',
  templateUrl: './editar-parte.page.html',
  styleUrls: ['./editar-parte.page.scss'],
})
export class EditarPartePage implements OnInit {

  id: number;
  data: Parte;
  latitude: any = 0;
  longitude: any = 0;

  options = {
    timeout: 10000,
    enableHighAccuracy: true,
    maximumAge: 3600
  };

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService,
    private geolocation: Geolocation
    ) {
      this.data = new Parte();
    }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params =>{
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.usuario;
      }
    });
  }

  update(){
    this.apiService.updateItem(this.data.id, this.data).subscribe(response => {
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

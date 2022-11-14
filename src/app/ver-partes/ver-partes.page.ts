import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { Parte } from '../models/parte';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ver-partes',
  templateUrl: './ver-partes.page.html',
  styleUrls: ['./ver-partes.page.scss'],
})
export class VerPartesPage implements OnInit {

  id: number;
  data: Parte;
  georeferenciacion;

  public options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  constructor(
    private nativeGeocoder: NativeGeocoder,
    public apiService: ApiService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    ) {
      this.data = new Parte();
    }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params =>{
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.usuario;
      }
    });
    this.georef();
    console.log("geor: ",this.georeferenciacion);

  }

  editar(item){
    let navigationExtras: NavigationExtras = {
      state: {
        usuario: item
      }
    };
    this.router.navigate(['editar-parte'], navigationExtras);
  }


  // GEOREF
  georef(){
  this.nativeGeocoder.reverseGeocode(this.data.latitud, this.data.latitud, this.options)
  .then((result: NativeGeocoderResult[]) => this.georeferenciacion = (JSON.stringify(result[0])))
  .catch((error: any) => console.log(error));
  console.log(this.georeferenciacion);


  this.nativeGeocoder.forwardGeocode('Berlin', this.options)
  .then((result: NativeGeocoderResult[]) => console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude))
  .catch((error: any) => console.log(error));
  }

}

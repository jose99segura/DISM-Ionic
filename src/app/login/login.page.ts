import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  dataUsuario;
  formularioLogin: FormGroup;

  constructor(
              // private splashScreen: SplashScreen,
              public router: Router,
              public loginService: LoginService,
              public fb: FormBuilder,
              public alertController: AlertController) {
                this.formularioLogin = this.fb.group({
                  'nombre': new FormControl("",Validators.required),
                  'password': new FormControl("",Validators.required)
                })
              }

  ngOnInit() {
    // this.splashScreen.show();
    this.getUsuarios();

    var x = document.getElementById("menuBorrar");
    x.style.display = "none";
  }


  ionViewWillEnter(){
    this.getUsuarios();
  }

  // METODOS
  getUsuarios(){
    this.loginService.getList().subscribe(response =>{
      this.dataUsuario = response;
    });
  }

  comprobarUsuario(){
    var f = this.formularioLogin.value;
console.log(this.dataUsuario);

    this.dataUsuario.forEach(user => {
      if(f.nombre === user.usuario){

        if (f.password == user.contra) {
          console.log("LOGIN CORRECTO");
          this.loginCorrecto();
        }else{
          // Cuando la contraseña esta mal
          this.estaMal();
        }
      }
    });

  }

  loginCorrecto(){
    this.router.navigate(['./home']);
    var x = document.getElementById("menuBorrar");
    x.style.display = "block";
  }

  async estaMal(){
    const alert = await this.alertController.create({
      header: 'Contraseña incorrecta',
      message: 'La contraseña introducida es incorrecta, inténtelo de nuevo',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

}

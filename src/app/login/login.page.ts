
import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { AutenticacionFirebaseService } from '../service/autenticacion-firebase.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();

  constructor(
    private router: Router,
    private autSvc: AutenticacionFirebaseService,
    private alertCtrl: AlertController

  ) { }

  ngOnInit() {
  }

  async onLogin(){
    this.autSvc.onLogin(this.user).then((user:any)=>{
      if(user!=null && user.code ==undefined){
        console.log('Successfully logged in!');
        
        this.router.navigate(['/home']);
      }
      else{
        if(user.code){
          if(user.code=='auth/wrong-password' || user.code =='auth/invalid-email' || user.code=='auth/argument-error'){
            this.openModal(user);
            this.onError();

          }
        }
      }
    }).catch((error: any)=>{
      this.openModal(error);
      this.onError();

    })

  }

  async openModal(user: any){
    console.error(user);
  }

  onRegister(){
    this.router.navigate(['/signin']);
  }

  onError() {
    this.alertCtrl.create({
      header: 'Error', 
      message: 'Error al ingresar!', 
      buttons: [{
        text: 'Entendido',
        role: 'cancel'
      }
    ]
    }).then(alertEl => {
      alertEl.present();
    })
  }


}
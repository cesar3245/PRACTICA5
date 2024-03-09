import { Component, OnInit } from '@angular/core';

// import { AutenticacionFirebaseService } from '../service/autenticacion-firebase.service';
import { Router } from '@angular/router';
import { AutenticacionFirebaseService } from '../service/autenticacion-firebase.service';

import { AlertController } from '@ionic/angular';


import { User } from '../interface/user';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  user: User = new User();

  constructor(
    private autSvc: AutenticacionFirebaseService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async onRegister(){
    this.autSvc.onRegister(this.user).then(user=>{
      if(user){
        console.log('Successfully created user!');
        this.router.navigate(['/login']);
      }
    }).catch(error=>{
      console.log('Error al crear usuario!');
      this.onError();

    })

  }
  onLogin(){
    this.router.navigate(["/login"]);
  }

  
  onError() {
    this.alertCtrl.create({
      header: 'Error', 
      message: 'Error al crear usuario!', 
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



















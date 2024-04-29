import { Component, OnInit } from '@angular/core';

// import { AutenticacionFirebaseService } from '../service/autenticacion-firebase.service';
import { Router } from '@angular/router';
import { AutenticacionFirebaseService } from '../service/autenticacion-firebase.service';

import { AlertController } from '@ionic/angular';


import { User } from '../interface/user';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { MenuService } from '../service/menu.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  user: User = new User();
  formRegister : any;


  constructor(
    private autSvc: AutenticacionFirebaseService,
    private router: Router,
    private alertCtrl: AlertController,
    private menuService: MenuService,
    private formBuilder: FormBuilder


  ) { }

  ngOnInit() {
    this.buildForm();

  }

  async onRegister(){
    this.autSvc.onRegister(this.user).then(user=>{
      if(user){
        console.log('Successfully created user!');
        this.menuService.setTitle("login");

        this.router.navigate(['/login']);
      }
    }).catch(error=>{
      console.log('Error al crear usuario!');
      this.onError();

    })

  }
  onLogin(){
    this.menuService.setTitle("login");
    this.router.navigate(["/login"]);
  }

  
  buildForm(){
    this.formRegister = this.formBuilder.group({
      email: new FormControl('',{validators: [Validators.email,Validators.required]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(6), Validators.maxLength(6)]})
    });
  }

  submitForm(){
    if(this.formRegister.valid){
      this.user.email = this.formRegister.get('email').value;
      this.user.password = this.formRegister.get('password').value;
      this.onRegister();
    }
  }

  ionViewWillEnter(){
    this.formRegister.reset();
  }

  hasError: any = (controlName: string, errorName: string) => {
		return !this.formRegister.controls[controlName].valid &&
			this.formRegister.controls[controlName].hasError(errorName) &&
			this.formRegister.controls[controlName].touched;
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



















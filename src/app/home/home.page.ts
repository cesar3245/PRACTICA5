import { Component, OnInit } from '@angular/core';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Router } from '@angular/router';
import { AutenticacionFirebaseService } from '../service/autenticacion-firebase.service';
import { MenuService } from '../service/menu.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isLoged : any = false;


  constructor(private authService: AutenticacionFirebaseService,
    private router: Router,
    private menuService: MenuService) {       
      onAuthStateChanged(this.authService.getStateAuth(), user=>{
      if(user!=null && user != undefined){
        this.isLoged = true;
      }
    });
  }


  onLogout(){
    signOut(this.authService.getStateAuth()).then(response=>{
      console.log("Logout!");
      this.menuService.setTitle("login");
      this.router.navigateByUrl('/login');
    }).catch(error=>{

    });
  }


  ngOnInit() {
  }

}

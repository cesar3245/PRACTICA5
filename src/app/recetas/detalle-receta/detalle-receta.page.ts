import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetasService } from '../recetas.service';
import { Receta } from '../receta.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-receta',
  templateUrl: './detalle-receta.page.html',
  styleUrls: ['./detalle-receta.page.scss'],
})
export class DetalleRecetaPage implements OnInit {

  loadedReceta: any;
  
  private activatedRoute: ActivatedRoute;
  private recetasService: RecetasService;
  private router: Router;
  private alertCtrl: AlertController;

  constructor(activatedRoute: ActivatedRoute,
              recetasService: RecetasService,
              router: Router,
              alertCtrl: AlertController) { 
                this.activatedRoute = activatedRoute;
                this.recetasService = recetasService;
                this.router = router;
                this.alertCtrl = alertCtrl;
              }
  
  



  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recetaId')) {
        // redirect
        this.router.navigate(['/recetas']);
        return;
      }
      const recetaId: string = paramMap.get('recetaId')!;
      this.loadedReceta = this.recetasService.getReceta(recetaId);
    });
  }

  onEliminarReceta() {
    this.alertCtrl.create({
      header: 'Estas segur@?', 
      message: 'Deseas eliminar la receta?', 
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Eliminar',
        handler: () => {
          this.recetasService.eliminarReceta(this.loadedReceta.id); 
          this.router.navigate(['/recetas']);
      
        }
      }
    ]
    }).then(alertEl => {
      alertEl.present();
    })
  }


}














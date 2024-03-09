import { Component, OnInit } from '@angular/core';
import { Receta } from './receta.model';
import { RecetasService } from './recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {

  public recetas: Receta[] = [];
  private recetaService: RecetasService

  constructor(recetaService: RecetasService) { 
    this.recetaService = recetaService;
  }

  ngOnInit() {
    //this.recetas = this.recetaService.getAllRecetas();
    //console.log(this.recetas);
  }
  ionViewWillEnter() {
    this.recetas = this.recetaService.getAllRecetas();
  }

}

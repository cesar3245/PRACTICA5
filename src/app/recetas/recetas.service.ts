import { Injectable } from '@angular/core';
import { Receta } from './receta.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  private recetas: Receta[] = [
  {
    id: 'r1',
      title: 'Pollo frito',
      imageURL: 'https://mojo.generalmills.com/api/public/content/1KOpdVP5O0Kp_H6eMW5aoA_gmi_hi_res_jpeg.jpeg?v=439e2431&t=16e3ce250f244648bef28c5949fb99ff',
      ingredientes: ['1/2 litro de aceite de oliva',
                     '200 gramos de harina',
                     '100 gramos de maicena (harina de maíz refinada)',
                     '1 cucharadita de pimentón dulce',
                     '1 cucharadita de curry',
                     '1 cucharadita de ajo en polvo',
                     '1/2 cucharadita de cayena',
                     '2 de tomillo',
                     '2 de eneldo',
                     '1 pizca de estragón',
                     'agua',
                     '200 gramos de harina',
                     '1 cucharadita de pimentón dulce',
                     '1/2 cucharadita de curry',
                     '1/2 cucharadita de cayena',
                     '1/2 cucharadita de ajo en polvo',
                     '2 de tomillo',
                     '2 de eneldo']
     
     
    },
    {
      id: 'r2',
      title: 'Espagueti rojo',
      imageURL: 'https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/7ea1f5dc22c500d98182bc418ae329d1.jpg',
      ingredientes: ['1 1/2 Tazas de Puré de tomate natural', 
                     '3/4 Taza de Agua',
                     '1 1/2 Cubos de Concentrado de Tomate con Pollo CONSOMATE',
                     '1 Lata de Media Crema NESTLÉ',
                     '1 Paquete de Espagueti (200 g)',
                     '1 Envase de Media Crema NESTLÉ® refrigerada (190 g)',
                     '3 Ramitas de Perejil fresco desinfectado y picado finamente']
    }
  ]


  constructor() { }

  getAllRecetas(){
    return [...this.recetas];
  }
  getReceta(recetaId: string) {
    return {
      ...this.recetas.find(receta => {
        return receta.id === recetaId;
      })
    };
  }

  eliminarReceta(recetaId: string) {
    this.recetas = this.recetas.filter(receta => {
      return receta.id !== recetaId;
    });
  }






}

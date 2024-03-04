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
      title: 'Schnitzel',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/2017-05-28_Wiener_Schnitzel_mit_Pommes_frites_anagoria.jpg/1920px-2017-05-28_Wiener_Schnitzel_mit_Pommes_frites_anagoria.jpg',
      ingredientes: ['French Fries', 'Pork Chop', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageURL: 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
      ingredientes: ['Spaghetti', 'Meat', 'Tomatoes']
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

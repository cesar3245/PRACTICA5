import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'recetas',
    pathMatch: 'full'
  },
  {
    path: 'recetas',
    children: [
      {
        path: '',
        loadChildren: () => import('./recetas/recetas.module').then(m => m.RecetasPageModule)
      },
      {
        path: ':recetaId',
        loadChildren: () => import('./recetas/detalle-receta/detalle-receta.module').then(m => m.DetalleRecetaPageModule)
      }
    ]

  },

    
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

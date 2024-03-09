import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { RutasActivasGuard } from './service/rutas-activas.guard';


const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
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
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [RutasActivasGuard]

  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },

    
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

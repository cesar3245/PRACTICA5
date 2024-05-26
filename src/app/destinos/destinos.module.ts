import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsComponent } from '../componentes/google-maps/google-maps.component';

import { IonicModule } from '@ionic/angular';

import { DestinosPageRoutingModule } from './destinos-routing.module';

import { DestinosPage } from './destinos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DestinosPage, GoogleMapsComponent]
})
export class DestinosPageModule {}

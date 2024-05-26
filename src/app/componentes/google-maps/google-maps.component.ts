import { Component, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleService } from '../../service/google.service';
import { DOCUMENT } from '@angular/common';
import { ModalController } from '@ionic/angular';

declare var google: any;
@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent  implements OnInit {
  @Input() position : any = {
    lat:  -2.889,
    lng:  -78.899
  }
  
  label: any = {
    titulo: 'Ubicación',
    subtitulo: 'Mi ubicación de envio'
  };
  
  map: any;
  marker: any;
  infowindow: any;
  positionSet: any;
  
  @ViewChild('map') divMap: any;
  
    constructor(
      private renderer: Renderer2,
      @Inject(DOCUMENT) private document: any,
      private googleMapsService: GoogleService,
      public modalController: ModalController
    ) { }
  
    ngOnInit() {
      this.inicializarGooglemaps();
    }
  
    async inicializarGooglemaps(){
      this.googleMapsService.init(this.renderer, this.document).
      then(()=>{
        this.initMap()
      })
      .catch((error: any)=>{
        console.error(error);
      });
    }
    initMap(){
      const position = this.position;
  
      let latLng = new google.maps.LatLng(position.lat, position.lng);
  
      let mapOptions = {
        center: latLng,
        zoom: 15,
        disableDefaultUI: true,
        clickableIcons: false
      };
  
      this.map = new google.maps.Map(this.divMap.nativeElement, mapOptions);
  
      this.marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        draggable: true
      });
  
      this.clickHandEvent();
      this.infowindow = new google.maps.InfoWindow();
      this.addMarker(position);
      this.setInfoWindow(this.marker, this.label.titulo, this.label.subtitulo);
    }
    clickHandEvent(){
      this.map.addListener('click', (event: any)=>{
        const position = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        };
        this.addMarker(position);
      });
    }
  
    addMarker(position: any): void{
      let latLng = new google.maps.LatLng(position.lat, position.lng);
      this.marker.setPosition(latLng);
      this.map.panTo(position);
      this.positionSet = position;
    }
  
    setInfoWindow(marker: any, titulo: string, subtitulo: string){
      const contentString = '<div id="contentInsideMap">' +
                            '<div>'+
                            '</div>'+
                            '<p style="font-weight: bold; margin-bottom:5px;">'+
                            '<div id="bodyContent">'+
                            '<p class="normal m-0">'+
                            subtitulo+'</p>'+
                            '</div>'+
                            '</div>';
      this.infowindow.setContent(contentString);
      this.infowindow.open(this.map, marker);
    }
  
    async mylocation(){
      Geolocation.getCurrentPosition().then((res: any)=>{
        console.log('mulocation() -> get', res);
  
        const position = {
          lat: res.coords.latitude,
          lng: res.coords.longitude
        };
  
        this.addMarker(position);
      });
    }
  
    aceptar(){
      console.log('click aceptar ->', this.positionSet);
      this.modalController.dismiss({pos: this.positionSet});
    }

}

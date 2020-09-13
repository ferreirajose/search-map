import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public mapa: Mapboxgl.Map;
  public latitude: number;
  public longitude: number;
  address: string;
  public zoom:number;

  ngOnInit() {
    this.setCurrentLocation();
  }

    // Get Current Location Coordinates
    private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 9;
        });
      }
    }

    markerDragEnd() {

    }

}

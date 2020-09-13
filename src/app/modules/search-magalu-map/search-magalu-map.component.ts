import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-search-magalu-map',
  templateUrl: './search-magalu-map.component.html',
  styleUrls: ['./search-magalu-map.component.css']
})
export class SearchMagaluMapComponent implements OnInit {

  // public mapa: Mapboxgl.Map;
  // public latitude: number;
  // public longitude: number;
  // public address: string;
  // public zoom: number;

  // constructor() {
  //   this.zoom = 9;
  // }

  // ngOnInit() {
  //   this.setCurrentLocation();
  // }

  // // Get Current Location Coordinates
  // private setCurrentLocation() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //     });
  //   }
  // }

  // markerDragEnd() {

  // }


  public mapa: Mapboxgl.Map;
  public latitude: number;
  public longitude: number;

  constructor() {
    this.longitude = 0;
    this.latitude = 0;
  }

  ngOnInit(): void {
    this.loadMap();
    this.setCurrentLocation();
  }

  private loadMap(): void {
    (Mapboxgl as any).accessToken = environment.REACT_APP_TOKEN_MAPGL;
    this.mapa = new Mapboxgl.Map({
      container: 'map-box',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-34.889641425636825, -7.1163463233757795],
      zoom: 9
    });

    this.createMarker(-34.889641425636825, -7.1163463233757795);
  }

  private createMarker(latitude: number, longitude: number): void {

    const marker = new Mapboxgl.Marker({
      draggable: true
    }).setLngLat([latitude, longitude]).addTo(this.mapa);

    marker.on('drag', () => {
      console.log(marker.getLngLat());
    });

  }

}

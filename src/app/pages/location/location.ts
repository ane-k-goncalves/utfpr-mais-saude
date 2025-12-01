import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-location',
  imports: [GoogleMap, FormsModule, CommonModule],
  templateUrl: './location.html',
  styleUrls: ['./location.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Location {
  center: google.maps.LatLngLiteral = { lat: -25.395, lng: -51.458 };
  zoom = 14;

  // Marcadores fixos compatíveis com map-marker
  markers: google.maps.MarkerOptions[] = [
    {
      position: { lat: -25.4034847, lng: -51.5075727 },
      label: 'UPA',
      title: 'Ponto',
    },
  ];
}

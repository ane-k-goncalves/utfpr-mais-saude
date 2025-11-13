import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-location',
  imports: [GoogleMap],
  templateUrl: './location.html',
  styleUrl: './location.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Location {
  center: google.maps.LatLngLiteral = { lat: 37.7749, lng: -122.4194 };
  zoom = 12;
}

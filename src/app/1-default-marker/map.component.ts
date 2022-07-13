import { Component } from '@angular/core';
import { IMarker } from '@mugan86/ng-leaflet';

@Component({
  selector: 'app-default-layer',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class DefaultMarkerComponent {
  markers: Array<IMarker> = [
    {
      position: {
        lat: 35.08424,
        lng: -106.64905,
      },
      popup: {
        content: '<h2>Albuquerque - Breaking Bad</h2>',
      },
    },
  ];
}

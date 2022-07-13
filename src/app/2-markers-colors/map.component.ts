import { Component } from '@angular/core';
import { IConfigMap, tileLayers } from '@mugan86/ng-leaflet';
import { IMarker } from '@mugan86/ng-leaflet/lib/models';

@Component({
  selector: 'app-external-layer-default',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MarkersColorsComponent {
  markers: Array<IMarker> = [
    {
      position: {
        lat: 37.826703,
        lng: -122.42096,
      },
      popup: {
        content: '<h2>Alcatraz</h2>',
      },
    },
    {
      position: {
        lat: 38.57944,
        lng: -121.49085,
      },
      popup: {
        content: '<h2>California</h2>',
      },
    },
  ];
  config: IConfigMap = {
    markerColor: 'red',
    fitBounds: true,
    center: [37.77713, -122.41964],
    defaultLayer: {
      map: tileLayers.baseLayers.stadia.map.AlidadeSmoothDark,
      atribution: tileLayers.baseLayers.stadia.atribution,
    },
    watermark: {
      size: '20px',
    },
  };
}

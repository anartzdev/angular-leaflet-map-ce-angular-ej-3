import { Component, OnInit } from '@angular/core';
import { IConfigMap, IMarker } from '@mugan86/ng-leaflet';
import gpxParser from 'gpxparser';

@Component({
  selector: 'app-route',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class RouteComponent implements OnInit {
  markers: Array<IMarker> = [];
  size: { width: string; height: string } = {
    width: '100%',
    height: '400px',
  };
  config?: IConfigMap = {
    drawRoute: {
      active: true,
      showControl: true,
      title: 'Jabali Trail (9.5km / 330m+)',
    },
  };

  ngOnInit() {
    this.markers.length = 0;
    fetch(
      'https://raw.githubusercontent.com/leaflet-maps-course/resources/main/tracks/jabali_trail_2016_1.gpx'
    )
      .then((response) => response.text())
      .then((data) => {
        const gpx = new gpxParser(); //Create gpxParser Object
        gpx.parse(data); //parse gpx file from string data
        gpx.tracks[0].points.map((point) => {
          this.markers.push({
            position: {
              lat: point.lat,
              lng: point.lon,
            },
          });
        });
      });
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgLeafletModule } from '@mugan86/ng-leaflet';
import { AppRoutingModule } from './app-routing.module';

import { IConfigMap } from '@mugan86/ng-leaflet/lib/models';
import { tileLayers } from '@mugan86/ng-leaflet';
import { DefaultMarkerComponent } from './1-default-marker/map.component';
import { MarkersColorsComponent } from './2-markers-colors/map.component';
import { RouteWithMarkersComponent } from './3-route-with-markers/map.component';
import { RouteComponent } from './4-route/map.component';

// Use fake location
// Developer Chrome tools / Settings / More tools / Sensors
const config: IConfigMap = {
  center: [35.08424, -106.64905],
  defaultLayer: {
    map: tileLayers.baseLayers.osmHot.map,
    atribution: tileLayers.baseLayers.osmHot.atribution,
  },
  watermark: {
    size: '40px',
    position: 'topright',
  },
  zoom: {
    zoomInTitle: 'Aumentar',
    zoomOutTitle: 'Disminuir',
  },
};

@NgModule({
  imports: [BrowserModule, NgLeafletModule.forRoot(config), AppRoutingModule],
  declarations: [
    AppComponent,
    DefaultMarkerComponent,
    MarkersColorsComponent,
    RouteWithMarkersComponent,
    RouteComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

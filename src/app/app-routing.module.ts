import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultMarkerComponent } from './1-default-marker/map.component';
import { MarkersColorsComponent } from './2-markers-colors/map.component';
import { RouteWithMarkersComponent } from './3-route-with-markers/map.component';
import { RouteComponent } from './4-route/map.component';

const routes: Routes = [
  { path: '', component: DefaultMarkerComponent },
  { path: 'markers-colors', component: MarkersColorsComponent },
  { path: 'route-markers', component: RouteWithMarkersComponent },
  { path: 'route', component: RouteComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

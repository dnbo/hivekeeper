import { Constants } from './_core/constants';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HivesPageComponent } from "app/hives/containers/hives-page/hives-page.component";
import { DashboardPageComponent } from "app/dashboard/containers/dashboard-page/dashboard-page.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: Constants.Routes.hives },
  { path: Constants.Routes.home, component: DashboardPageComponent },
  { path: Constants.Routes.hives, component: HivesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

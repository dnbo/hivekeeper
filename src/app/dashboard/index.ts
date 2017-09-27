import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardPageComponent } from "app/dashboard/containers/dashboard-page/dashboard-page.component";

export const COMPONENTS = [
  DashboardPageComponent
];

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [COMPONENTS],
  declarations: [COMPONENTS],
  providers: [],
})
export class DashboardModule { }

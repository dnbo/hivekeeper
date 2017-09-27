import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HivesPageComponent } from "app/hives/containers/hives-page/hives-page.component";
import { HivePreviewComponent } from "app/hives/components/hive-preview/hive-preview.component";

export const COMPONENTS = [
  HivesPageComponent,
  HivePreviewComponent
];

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [COMPONENTS],
  declarations: [COMPONENTS],
  providers: [],
})
export class HivesModule { }

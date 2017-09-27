import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarMenuComponent } from "app/_components/nav/sidebar-menu/sidebar-menu.component";
import { PageHeaderComponent } from "app/_components/page-header/page-header.component";
import { FooterComponent } from "app/_components/footer/footer.component";
import { NavbarComponent } from "app/_components/nav/navbar/components/navbar-menu/navbar.component";

export const COMPONENTS = [
  NavbarComponent,
  SidebarMenuComponent,
  PageHeaderComponent,
  FooterComponent,
  // NavbarMenuComponent
];

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [COMPONENTS],
  declarations: [COMPONENTS],
  providers: [],
})
export class ComponentsModule { }

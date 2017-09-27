import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { NavbarComponent } from "app/_components/nav/navbar/navbar.component";
import { SidebarMenuComponent } from "app/_components/nav/sidebar-menu/sidebar-menu.component";
import { NavigationService } from "app/_shared/services/navigation.service";
import { AuthGuard } from "app/_shared/services/auth-guard.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NavigationService]
})
export class AppComponent {
  title = 'app';
  sideNavHidden: boolean = false;

  authenticated: boolean;
  constructor(private auth: AuthGuard, private navigationService: NavigationService) {
    auth.isAuthenticated().subscribe(a => {
      this.authenticated = a;
      console.log('Is authenticated:', this.authenticated);
    });
  }

  ngOnInit() {
    this.sideNavHidden = this.navigationService.sideNavVisible;
  }


}

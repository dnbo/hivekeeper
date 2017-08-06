import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AuthGuard } from './auth-guard.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  authenticated: boolean;
  constructor(private auth: AuthGuard) {
    auth.isAuthenticated().subscribe(a => {
      this.authenticated = a;
      console.log('Is authenticated:', this.authenticated);
    });
  }


}

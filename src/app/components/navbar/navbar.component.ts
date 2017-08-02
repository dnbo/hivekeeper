import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../auth-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  authenticated: boolean;
  constructor(private auth: AuthGuard) {
    auth.isAuthenticated().subscribe(a => {
      this.authenticated = a;
    });
  }

  ngOnInit() {
  }

}

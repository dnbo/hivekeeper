import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { NavigationService } from "app/_shared/services/navigation.service";
import { AuthGuard } from "app/_shared/services/auth-guard.service";

//services

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  authenticated: boolean;
  isSideNavVisible: boolean;
  constructor(private auth: AuthGuard,
    public af: AngularFireAuth, 
    private router: Router,
    private navigationService: NavigationService) {
    auth.isAuthenticated().subscribe(a => {
      this.authenticated = a;
    });
  }

  logout() {
    console.log('Logging out!');
    this.af.auth.signOut();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }

  toggleSideNav() {
    console.log(this.navigationService.sideNavVisible);
    this.navigationService.toggleSideBar();
  }

  ngOnInit() {
  }

}

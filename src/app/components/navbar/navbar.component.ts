import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../auth-guard.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  authenticated: boolean;
  constructor(private auth: AuthGuard, public af: AngularFireAuth, private router: Router) {
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

  ngOnInit() {
  }

}

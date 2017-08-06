import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../auth-guard.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  private user: firebase.User;
  constructor(public af: AngularFireAuth, private router: Router) {

    this.af.authState.subscribe(auth => {
      if (auth) {
        this.user = auth;
      }
    });

  }

  ngOnInit() {
  }

  public collapsed(event: any): void {

  }

  public expanded(event: any): void {

  }

}

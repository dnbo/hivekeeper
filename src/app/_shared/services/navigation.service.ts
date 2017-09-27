import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
  sideNavVisible: boolean = false;

  toggleSideBar() {
    this.sideNavVisible != this.sideNavVisible;
    console.log("Inside toggle!");
    console.log(this.sideNavVisible);
  }

  constructor() { }

}

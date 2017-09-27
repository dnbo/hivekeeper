import './rxjs-extensions';

// Angular modules
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// ngrx modules
import { Observable } from 'rxjs/Observable';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

// App module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './_core';
import { SharedModule } from './_shared';
import { ComponentsModule } from './_components';
import { reducers, metaReducers } from './_reducers';



import { MdToolbarModule, MdIconModule } from '@angular/material';
import { MaterialModule, MdButton } from '@angular/material';

import { CollapseModule } from 'ngx-bootstrap/collapse';

// AngularFire modules - SHOULD BE REPLACED BY A SINGLE MODULE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';


import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthGuard } from "app/_shared/services/auth-guard.service";
import { HivesModule } from "app/hives";
import { DashboardModule } from "app/dashboard";

// App modules

export const firebaseConfig = {
  apiKey: 'AIzaSyA4l582oXt_gg13U_yMQjspS6I_DkFDMtI',
  authDomain: 'hivekeeper-f1b4f.firebaseapp.com',
  databaseURL: 'https://hivekeeper-f1b4f.firebaseio.com',
  storageBucket: 'hivekeeper-f1b4f.appspot.com',
  messagingSenderId: '990227699678'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdToolbarModule,
    MdIconModule,
    MaterialModule,
    ComponentsModule,
    HivesModule,
    DashboardModule,
    StoreModule.forRoot(reducers, { metaReducers }), // Kommentera ut för att aktivera store-freeze
    // StoreDevtoolsModule.instrument({
    //   maxAge: 5
    // }),
    CollapseModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    // BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [AuthGuard, AngularFireAuth, BsModalService, AngularFireDatabase],
  bootstrap: [AppComponent],
  // entryComponents: [CreatehiveComponent]
})
export class AppModule { }



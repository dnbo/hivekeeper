import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { router } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MdToolbarModule, MdIconModule } from '@angular/material';
import { MaterialModule, MdButton } from '@angular/material';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { LoginComponent } from './components/login/login.component';
import { EmailComponent } from './components/email/email.component';
import { SignupComponent } from './components/signup/signup.component';
import { MembersComponent } from './components/members/members.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthGuard } from './auth-guard.service';
import { routes } from './app.routes';
import { HivesComponent } from './components/hives/hives.component';
import { CreatehiveComponent } from './components/modals/createhive/createhive.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccountComponent } from './components/account/account.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { DemoComponent } from './components/demo/demo.component';

export const firebaseConfig = {

};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    HelpComponent,
    SidebarMenuComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    HivesComponent,
    CreatehiveComponent,
    AccountComponent,
    PageHeaderComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    MdToolbarModule,
    MdIconModule,
    MaterialModule,
    CollapseModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule.initializeApp(firebaseConfig),
    routes,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [AuthGuard, AngularFireAuth, BsModalService, AngularFireDatabase],
  bootstrap: [AppComponent],
  entryComponents: [CreatehiveComponent]
})
export class AppModule { }



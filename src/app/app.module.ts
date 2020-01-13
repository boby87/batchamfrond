import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import {AcceuilService} from "./Service/AcceuilService";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MangerUserComponent } from './manger-user/manger-user.component';


const routes: Routes =[
  { path: '' ,component: AcceuilComponent},
  { path: 'acceuil' ,component: AcceuilComponent},
  { path: 'login' ,component: LoginComponent},
  { path: 'user' ,component: MangerUserComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    LoginComponent,
    HeaderComponent,
    MangerUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AcceuilService],
  bootstrap: [AppComponent]
})
export class AppModule { }

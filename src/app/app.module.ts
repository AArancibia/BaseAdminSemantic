import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {APP_ROUTES} from "./app.routes";
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import {PagesModules} from "./pages/pages.modules";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from "@angular/core";
import {PagesComponent} from "./pages.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PagesRoutes} from "./pages.routes";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent
  ],
  imports: [
    PagesRoutes,
    RouterModule,
    SharedModule
  ]
})

export class PagesModules {}

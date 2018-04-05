import {NgModule} from "@angular/core";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    PagenotfoundComponent,
    HeaderComponent,
    SidebarComponent
  ],
  exports: [
    PagenotfoundComponent,
    HeaderComponent,
    SidebarComponent
  ]
})

export class SharedModule {}

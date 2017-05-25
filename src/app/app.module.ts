import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AkademikModule } from './akademik/akademik.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

const routingAplikasi: Routes = [
  { path: "akademik", redirectTo: "/transaksi", pathMatch: "full"},
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AkademikModule,
    RouterModule.forRoot(routingAplikasi)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

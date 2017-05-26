import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { KehilanganComponent } from './kehilangan/kehilangan.component';
import { KeluarMasukComponent } from './keluar-masuk/keluar-masuk.component';
import { TempatParkirComponent } from './tempat-parkir/tempat-parkir.component';

const routingParkir : Routes = [
  { path: "parkir/kehilangan", component: KehilanganComponent },
  { path: "parkir/keluar-masuk", component: KeluarMasukComponent },
  { path: "parkir/tempat-parkir", component: TempatParkirComponent }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingParkir)
  ],
  declarations: [KehilanganComponent, KeluarMasukComponent, TempatParkirComponent]
})
export class ParkirModule { }

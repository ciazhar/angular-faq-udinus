import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KehilanganComponent } from './kehilangan/kehilangan.component';
import { KeluarMasukComponent } from './keluar-masuk/keluar-masuk.component';
import { TempatParkirComponent } from './tempat-parkir/tempat-parkir.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [KehilanganComponent, KeluarMasukComponent, TempatParkirComponent]
})
export class ParkirModule { }

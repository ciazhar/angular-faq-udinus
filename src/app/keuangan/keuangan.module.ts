import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { RekeningPembayaranComponent } from './rekening-pembayaran/rekening-pembayaran.component';
import { StatusPembayaranComponent } from './status-pembayaran/status-pembayaran.component';
import { TagihanComponent } from './tagihan/tagihan.component';

const routingKeuangan : Routes = [
  { path: "career-center/rekening-pembayaran", component: RekeningPembayaranComponent },
  { path: "career-center/status-pembayaran", component: StatusPembayaranComponent },
  { path: "career-center/tagihan", component: TagihanComponent }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingKeuangan)
  ],
  declarations: [RekeningPembayaranComponent, StatusPembayaranComponent, TagihanComponent]
})
export class KeuanganModule { }

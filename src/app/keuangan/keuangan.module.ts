import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RekeningPembayaranComponent } from './rekening-pembayaran/rekening-pembayaran.component';
import { StatusPembayaranComponent } from './status-pembayaran/status-pembayaran.component';
import { TagihanComponent } from './tagihan/tagihan.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RekeningPembayaranComponent, StatusPembayaranComponent, TagihanComponent]
})
export class KeuanganModule { }

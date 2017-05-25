import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AktifasiComponent } from './aktifasi/aktifasi.component';
import { HeregristrasiComponent } from './heregristrasi/heregristrasi.component';
import { IjazahComponent } from './ijazah/ijazah.component';
import { InformasiKelasKosongComponent } from './informasi-kelas-kosong/informasi-kelas-kosong.component';
import { KrsComponent } from './krs/krs.component';
import { KtmComponent } from './ktm/ktm.component';
import { PermohonanCutiComponent } from './permohonan-cuti/permohonan-cuti.component';
import { RegristrasiComponent } from './regristrasi/regristrasi.component';
import { TranskripComponent } from './transkrip/transkrip.component';
import { WisudaComponent } from './wisuda/wisuda.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AktifasiComponent, HeregristrasiComponent, IjazahComponent, InformasiKelasKosongComponent, KrsComponent, KtmComponent, PermohonanCutiComponent, RegristrasiComponent, TranskripComponent, WisudaComponent]
})
export class AkademikModule { }

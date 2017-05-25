import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

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

const routingAkademik : Routes = [
  { path: "akademik/aktifasi", component: AktifasiComponent },
  { path: "akademik/heregristrasi", component: HeregristrasiComponent },
  { path: "akademik/ijazah", component: IjazahComponent },
  { path: "akademik/informasi-kelas-kosong", component: InformasiKelasKosongComponent },
  { path: "akademik/krs", component: KrsComponent },
  { path: "akademik/ktm", component: KtmComponent },
  { path: "akademik/permohonan-cuti", component: PermohonanCutiComponent },
  { path: "akademik/regristrasi", component: RegristrasiComponent },
  { path: "akademik/transkrip", component: TranskripComponent },
  { path: "akademik/wisuda", component: WisudaComponent }
]


@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingAkademik)
  ],
  declarations: [AktifasiComponent, HeregristrasiComponent, IjazahComponent, InformasiKelasKosongComponent, KrsComponent, KtmComponent, PermohonanCutiComponent, RegristrasiComponent, TranskripComponent, WisudaComponent]
})
export class AkademikModule { }

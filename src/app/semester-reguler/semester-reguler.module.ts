import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AbsensiComponent } from './absensi/absensi.component';
import { PendaftaranSemesterPendekComponent } from './pendaftaran-semester-pendek/pendaftaran-semester-pendek.component';
import { ProsesKrsComponent } from './proses-krs/proses-krs.component';
import { UjianTengahDanAkhirSemesterComponent } from './ujian-tengah-dan-akhir-semester/ujian-tengah-dan-akhir-semester.component';

const routingSemesterReguler : Routes = [
  { path: "semester-reguler/absensi", component: AbsensiComponent },
  { path: "semester-reguler/pendaftaran-semester-pendek", component: PendaftaranSemesterPendekComponent },
  { path: "semester-reguler/proses-krs", component: ProsesKrsComponent },
  { path: "semester-reguler/ujian-tengah-dan-akhir-semester", component: UjianTengahDanAkhirSemesterComponent }
]


@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingSemesterReguler)
  ],
  declarations: [AbsensiComponent, PendaftaranSemesterPendekComponent, ProsesKrsComponent, UjianTengahDanAkhirSemesterComponent]
})
export class SemesterRegulerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AbsensiComponent } from './absensi/absensi.component';
import { PendaftaranSpComponent } from './pendaftaran-sp/pendaftaran-sp.component';
import { ProsesKrsComponent } from './proses-krs/proses-krs.component';
import { UjianAkhirSemesterComponent } from './ujian-akhir-semester/ujian-akhir-semester.component';
import { UjianTengahSemesterComponent } from './ujian-tengah-semester/ujian-tengah-semester.component';

const routingSemesterPendek : Routes = [
  { path: "semester-pendek/absensi", component: AbsensiComponent },
  { path: "semester-pendek/pendaftaran-sp", component: PendaftaranSpComponent },
  { path: "semester-pendek/proses-krs", component: ProsesKrsComponent },
  { path: "semester-pendek/ujian-akhir-semester", component: UjianAkhirSemesterComponent },
  { path: "semester-pendek/ujian-tengah-semester", component: UjianTengahSemesterComponent }
]


@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingSemesterPendek)
  ],
  declarations: [AbsensiComponent, PendaftaranSpComponent, ProsesKrsComponent, UjianAkhirSemesterComponent, UjianTengahSemesterComponent]
})
export class SemesterPendekModule { }

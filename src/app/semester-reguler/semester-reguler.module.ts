import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsensiComponent } from './absensi/absensi.component';
import { PendaftaranSemesterPendekComponent } from './pendaftaran-semester-pendek/pendaftaran-semester-pendek.component';
import { ProsesKrsComponent } from './proses-krs/proses-krs.component';
import { UjianTengahDanAkhirSemesterComponent } from './ujian-tengah-dan-akhir-semester/ujian-tengah-dan-akhir-semester.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AbsensiComponent, PendaftaranSemesterPendekComponent, ProsesKrsComponent, UjianTengahDanAkhirSemesterComponent]
})
export class SemesterRegulerModule { }

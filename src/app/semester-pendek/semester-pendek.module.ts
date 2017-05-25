import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsensiComponent } from './absensi/absensi.component';
import { PendaftaranSpComponent } from './pendaftaran-sp/pendaftaran-sp.component';
import { ProsesKrsComponent } from './proses-krs/proses-krs.component';
import { UjianAkhirSemesterComponent } from './ujian-akhir-semester/ujian-akhir-semester.component';
import { UjianTengahSemesterComponent } from './ujian-tengah-semester/ujian-tengah-semester.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AbsensiComponent, PendaftaranSpComponent, ProsesKrsComponent, UjianAkhirSemesterComponent, UjianTengahSemesterComponent]
})
export class SemesterPendekModule { }

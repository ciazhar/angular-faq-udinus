import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BebanKinerjaDosenComponent } from './beban-kinerja-dosen/beban-kinerja-dosen.component';
import { InformasiDosenComponent } from './informasi-dosen/informasi-dosen.component';
import { InformasiPegawaiComponent } from './informasi-pegawai/informasi-pegawai.component';
import { SerdosComponent } from './serdos/serdos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BebanKinerjaDosenComponent, InformasiDosenComponent, InformasiPegawaiComponent, SerdosComponent]
})
export class KepegawaianModule { }

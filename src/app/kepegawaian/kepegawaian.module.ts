import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { BebanKinerjaDosenComponent } from './beban-kinerja-dosen/beban-kinerja-dosen.component';
import { InformasiDosenComponent } from './informasi-dosen/informasi-dosen.component';
import { InformasiPegawaiComponent } from './informasi-pegawai/informasi-pegawai.component';
import { SerdosComponent } from './serdos/serdos.component';

const routingKepegawaian : Routes = [
  { path: "kepegawaian/beban-kinerja-dosen", component: BebanKinerjaDosenComponent },
  { path: "kepegawaian/informasi-dosen", component: InformasiDosenComponent },
  { path: "kepegawaian/informasi-pegawai", component: InformasiPegawaiComponent },
  { path: "kepegawaian/serdos", component: SerdosComponent },
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingKepegawaian)
  ],
  declarations: [BebanKinerjaDosenComponent, InformasiDosenComponent, InformasiPegawaiComponent, SerdosComponent]
})
export class KepegawaianModule { }

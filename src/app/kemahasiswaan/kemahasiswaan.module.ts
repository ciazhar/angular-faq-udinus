import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { BeasiswaComponent } from './beasiswa/beasiswa.component';
import { KomunitasComponent } from './komunitas/komunitas.component';
import { MawapresComponent } from './mawapres/mawapres.component';
import { OrganisasiAtauHimpunanMahasiswaComponent } from './organisasi-atau-himpunan-mahasiswa/organisasi-atau-himpunan-mahasiswa.component';
import { PenelitianAtauKaryaIlmiahComponent } from './penelitian-atau-karya-ilmiah/penelitian-atau-karya-ilmiah.component';
import { UnitKegiatanMahasiswaComponent } from './unit-kegiatan-mahasiswa/unit-kegiatan-mahasiswa.component';

const routingKemahasiswaan : Routes = [
  { path: "kemahasiswaan/beasiswa", component: BeasiswaComponent },
  { path: "kemahasiswaan/komunitas", component: KomunitasComponent },
  { path: "kemahasiswaan/mawapres", component: MawapresComponent },
  { path: "kemahasiswaan/organisasi-atau-himpunan-mahasiswa", component: OrganisasiAtauHimpunanMahasiswaComponent },
  { path: "kemahasiswaan/penelitian-atau-karya-ilmiah", component: PenelitianAtauKaryaIlmiahComponent },
  { path: "kemahasiswaan/unit-kegiatan-mahasiswa", component: UnitKegiatanMahasiswaComponent }
]


@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingKemahasiswaan)
  ],
  declarations: [BeasiswaComponent, KomunitasComponent, MawapresComponent, OrganisasiAtauHimpunanMahasiswaComponent, PenelitianAtauKaryaIlmiahComponent, UnitKegiatanMahasiswaComponent]
})
export class KemahasiswaanModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeasiswaComponent } from './beasiswa/beasiswa.component';
import { KomunitasComponent } from './komunitas/komunitas.component';
import { MawapresComponent } from './mawapres/mawapres.component';
import { OrganisasiAtauHimpunanMahasiswaComponent } from './organisasi-atau-himpunan-mahasiswa/organisasi-atau-himpunan-mahasiswa.component';
import { PenelitianAtauKaryaIlmiahComponent } from './penelitian-atau-karya-ilmiah/penelitian-atau-karya-ilmiah.component';
import { UnitKegiatanMahasiswaComponent } from './unit-kegiatan-mahasiswa/unit-kegiatan-mahasiswa.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BeasiswaComponent, KomunitasComponent, MawapresComponent, HimpunanMahasiswaComponent, OrganisasiAtauHimpunanMahasiswaComponent, PenelitianAtauKaryaIlmiahComponent, UnitKegiatanMahasiswaComponent]
})
export class KemahasiswaanModule { }

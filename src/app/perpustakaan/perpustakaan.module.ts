import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { BukuTextComponent } from './buku-text/buku-text.component';
import { EBookComponent } from './e-book/e-book.component';
import { JurnalComponent } from './jurnal/jurnal.component';
import { LetakPerpustakaanComponent } from './letak-perpustakaan/letak-perpustakaan.component';
import { ProsedurPengembalianComponent } from './prosedur-pengembalian/prosedur-pengembalian.component';
import { ProsedurPinjamComponent } from './prosedur-pinjam/prosedur-pinjam.component';
import { SkripsiAtauTugasAkhirComponent } from './skripsi-atau-tugas-akhir/skripsi-atau-tugas-akhir.component';

const routingPerpustakaan : Routes = [
  { path: "perpustakaan/buku-text", component: BukuTextComponent },
  { path: "perpustakaan/e-book", component: EBookComponent },
  { path: "perpustakaan/jurnal", component: JurnalComponent },
  { path: "perpustakaan/letak-perpustakaan", component: LetakPerpustakaanComponent },
  { path: "perpustakaan/prosedur-pengembalian", component: ProsedurPengembalianComponent },
  { path: "perpustakaan/prosedur-pinjam", component: ProsedurPinjamComponent },
  { path: "perpustakaan/skripsi-atau-tugas-akhir", component: SkripsiAtauTugasAkhirComponent }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingPerpustakaan)
  ],
  declarations: [BukuTextComponent, EBookComponent, JurnalComponent, LetakPerpustakaanComponent, ProsedurPengembalianComponent, ProsedurPinjamComponent, SkripsiAtauTugasAkhirComponent]
})
export class PerpustakaanModule { }

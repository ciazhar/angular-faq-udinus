import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BukuTextComponent } from './buku-text/buku-text.component';
import { EBookComponent } from './e-book/e-book.component';
import { JurnalComponent } from './jurnal/jurnal.component';
import { LetakPerpustakaanComponent } from './letak-perpustakaan/letak-perpustakaan.component';
import { ProsedurPengembalianComponent } from './prosedur-pengembalian/prosedur-pengembalian.component';
import { ProsedurPinjamComponent } from './prosedur-pinjam/prosedur-pinjam.component';
import { SkripsiAtauTugasAkhirComponent } from './skripsi-atau-tugas-akhir/skripsi-atau-tugas-akhir.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BukuTextComponent, EBookComponent, JurnalComponent, LetakPerpustakaanComponent, ProsedurPengembalianComponent, ProsedurPinjamComponent, SkripsiAtauTugasAkhirComponent]
})
export class PerpustakaanModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JenisDanKegiatanComponent } from './jenis-dan-kegiatan/jenis-dan-kegiatan.component';
import { LetakLaboratoriumComponent } from './letak-laboratorium/letak-laboratorium.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JenisDanKegiatanComponent, LetakLaboratoriumComponent]
})
export class LaboratoriumModule { }

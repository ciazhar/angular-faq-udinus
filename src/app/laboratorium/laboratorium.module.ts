import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { JenisDanKegiatanComponent } from './jenis-dan-kegiatan/jenis-dan-kegiatan.component';
import { LetakLaboratoriumComponent } from './letak-laboratorium/letak-laboratorium.component';

const routingLaboratorium : Routes = [
  { path: "laboratorium/jenis-dan-kegiatan", component: JenisDanKegiatanComponent },
  { path: "laboratorium/letak-laboratorium", component: LetakLaboratoriumComponent }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingLaboratorium)
  ],
  declarations: [JenisDanKegiatanComponent, LetakLaboratoriumComponent]
})
export class LaboratoriumModule { }

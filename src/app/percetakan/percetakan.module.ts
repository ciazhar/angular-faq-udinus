import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { LokasiPercetakanComponent } from './lokasi-percetakan/lokasi-percetakan.component';
import { ModulKuliahComponent } from './modul-kuliah/modul-kuliah.component';

const routingPercetakan : Routes = [
  { path: "percetakan/lokasi-percetakan", component: LokasiPercetakanComponent },
  { path: "percetakan/modul-kuliah", component: ModulKuliahComponent }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingPercetakan)
  ],
  declarations: [LokasiPercetakanComponent, ModulKuliahComponent]
})
export class PercetakanModule { }

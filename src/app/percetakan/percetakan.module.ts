import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LokasiPercetakanComponent } from './lokasi-percetakan/lokasi-percetakan.component';
import { ModulKuliahComponent } from './modul-kuliah/modul-kuliah.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LokasiPercetakanComponent, ModulKuliahComponent]
})
export class PercetakanModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HalHalPentingComponent } from './hal-hal-penting/hal-hal-penting.component';
import { MekanismeWisudaComponent } from './mekanisme-wisuda/mekanisme-wisuda.component';
import { SyaratPendaftaranWisudaComponent } from './syarat-pendaftaran-wisuda/syarat-pendaftaran-wisuda.component';
import { TanggalPelaksanaanComponent } from './tanggal-pelaksanaan/tanggal-pelaksanaan.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HalHalPentingComponent, MekanismeWisudaComponent, SyaratPendaftaranWisudaComponent, TanggalPelaksanaanComponent]
})
export class WisudaModule { }

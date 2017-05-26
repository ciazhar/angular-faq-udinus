import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HalHalPentingComponent } from './hal-hal-penting/hal-hal-penting.component';
import { MekanismeWisudaComponent } from './mekanisme-wisuda/mekanisme-wisuda.component';
import { SyaratPendaftaranWisudaComponent } from './syarat-pendaftaran-wisuda/syarat-pendaftaran-wisuda.component';
import { TanggalPelaksanaanComponent } from './tanggal-pelaksanaan/tanggal-pelaksanaan.component';

const routingWisuda : Routes = [
  { path: "wisuda/hal-hal-penting", component: HalHalPentingComponent },
  { path: "wisuda/mekanisme-wisuda", component: MekanismeWisudaComponent },
  { path: "wisuda/syarat-pendaftaran-wisuda", component: SyaratPendaftaranWisudaComponent },
  { path: "wisuda/tanggal-pelaksanaan", component: TanggalPelaksanaanComponent }
]


@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingWisuda)
  ],
  declarations: [HalHalPentingComponent, MekanismeWisudaComponent, SyaratPendaftaranWisudaComponent, TanggalPelaksanaanComponent]
})
export class WisudaModule { }

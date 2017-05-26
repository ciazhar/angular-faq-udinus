import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { PenelitianComponent } from './penelitian/penelitian.component';
import { PengabdianComponent } from './pengabdian/pengabdian.component';
import { RencanaIndukPenelitianComponent } from './rencana-induk-penelitian/rencana-induk-penelitian.component';

const routingPenelitianDanPengabdian : Routes = [
  { path: "penelitian-dan-pengabdian/penelitian", component: PenelitianComponent },
  { path: "penelitian-dan-pengabdian/pengabdian", component: PengabdianComponent },
  { path: "penelitian-dan-pengabdian/rencana-induk-penelitian", component: RencanaIndukPenelitianComponent }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingPenelitianDanPengabdian)
  ],
  declarations: [PenelitianComponent, PengabdianComponent, RencanaIndukPenelitianComponent]
})
export class PenelitianDanPengabdianModule { }

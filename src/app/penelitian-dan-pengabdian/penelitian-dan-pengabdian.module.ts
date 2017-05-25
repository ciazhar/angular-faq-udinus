import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PenelitianComponent } from './penelitian/penelitian.component';
import { PengabdianComponent } from './pengabdian/pengabdian.component';
import { RencanaIndukPenelitianComponent } from './rencana-induk-penelitian/rencana-induk-penelitian.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PenelitianComponent, PengabdianComponent, RencanaIndukPenelitianComponent]
})
export class PenelitianDanPengabdianModule { }

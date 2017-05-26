import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { BeritaComponent } from './berita/berita.component';
import { InternalComponent } from './internal/internal.component';

const routingPengumumanAkademik : Routes = [
  { path: "pengumuman-akademik/berita", component: BeritaComponent },
  { path: "pengumuman-akademik/internal", component: InternalComponent }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingPengumumanAkademik)
  ],
  declarations: [BeritaComponent, InternalComponent]
})
export class PengumumanAkademikModule { }

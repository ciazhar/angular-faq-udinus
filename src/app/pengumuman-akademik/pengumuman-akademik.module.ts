import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeritaComponent } from './berita/berita.component';
import { InternalComponent } from './internal/internal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BeritaComponent, InternalComponent]
})
export class PengumumanAkademikModule { }

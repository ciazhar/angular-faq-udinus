import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { LayananPoliklinikComponent } from './layanan-poliklinik/layanan-poliklinik.component';

const routingLayananPoliklinik : Routes = [
  { path: "layanan-poliklinik/layanan-poliklinik", component: LayananPoliklinikComponent }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingLayananPoliklinik)
  ],
  declarations: [LayananPoliklinikComponent]
})
export class LayananPoliklinikModule { }

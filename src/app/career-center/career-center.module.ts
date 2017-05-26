import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { InfoLowonganComponent } from './info-lowongan/info-lowongan.component';

const routingCareerCenter : Routes = [
  { path: "career-center/info-lowongan", component: InfoLowonganComponent }
]


@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingCareerCenter)
  ],
  declarations: [InfoLowonganComponent]
})
export class CareerCenterModule { }

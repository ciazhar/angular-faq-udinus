import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { TracingAlumniComponent } from './tracing-alumni/tracing-alumni.component';

const routingAlumni : Routes = [
  { path: "alumni/tracing-alumni", component: TracingAlumniComponent }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingAlumni)
  ],
  declarations: [TracingAlumniComponent]
})
export class AlumniModule { }

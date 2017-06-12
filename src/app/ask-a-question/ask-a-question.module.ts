import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { UmumComponent } from './umum/umum.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { DosenComponent } from './dosen/dosen.component';
import { AskComponent } from './ask/ask.component';



const routingAskAQuestion : Routes = [
  { path: "ask-a-question/ask", component: AskComponent },
  { path: "ask-a-question/umum", component: UmumComponent },
  { path: "ask-a-question/mahasiswa", component: MahasiswaComponent },
  { path: "ask-a-question/dosen", component: DosenComponent }
]


@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingAskAQuestion)
  ],
  declarations: [UmumComponent, MahasiswaComponent, DosenComponent, AskComponent]
})
export class AskAQuestionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { EMailComponent } from './e-mail/e-mail.component';
import { JenisDanKategoriComponent } from './jenis-dan-kategori/jenis-dan-kategori.component';
import { LayananComponent } from './layanan/layanan.component';
import { LoginComponent } from './login/login.component';

const routingSiAdin : Routes = [
  { path: "si-adin/e-mail", component: EMailComponent },
  { path: "si-adin/jenis-dan-kategori", component: JenisDanKategoriComponent },
  { path: "si-adin/layanan", component: LayananComponent },
  { path: "si-adin/login", component: LoginComponent }
]


@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingSiAdin)
  ],
  declarations: [EMailComponent, JenisDanKategoriComponent, LayananComponent, LoginComponent]
})
export class SiAdinModule { }

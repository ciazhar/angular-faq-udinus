import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMailComponent } from './e-mail/e-mail.component';
import { JenisDanKategoriComponent } from './jenis-dan-kategori/jenis-dan-kategori.component';
import { LayananComponent } from './layanan/layanan.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EMailComponent, JenisDanKategoriComponent, LayananComponent, LoginComponent]
})
export class SiAdinModule { }

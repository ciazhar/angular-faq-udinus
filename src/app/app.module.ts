import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AkademikModule } from './akademik/akademik.module';
import { AlumniModule } from './alumni/alumni.module';
import { CareerCenterModule } from './career-center/career-center.module';
import { HospitalityModule } from './hospitality/hospitality.module';
import { KemahasiswaanModule } from './kemahasiswaan/kemahasiswaan.module';
import { KepegawaianModule } from './kepegawaian/kepegawaian.module';
import { KeuanganModule } from './keuangan/keuangan.module';
import { LaboratoriumModule } from './laboratorium/laboratorium.module';
import { LayananPoliklinikModule } from './layanan-poliklinik/layanan-poliklinik.module';
import { ParkirModule } from './parkir/parkir.module';
import { PenelitianDanPengabdianModule } from './penelitian-dan-pengabdian/penelitian-dan-pengabdian.module';
import { PengumumanAkademikModule } from './pengumuman-akademik/pengumuman-akademik.module';
import { PercetakanModule } from './percetakan/percetakan.module';
import { PerpustakaanModule } from './perpustakaan/perpustakaan.module';
import { SemesterPendekModule } from './semester-pendek/semester-pendek.module';
import { SemesterRegulerModule } from './semester-reguler/semester-reguler.module';
import { SiAdinModule } from './si-adin/si-adin.module';
import { WisudaModule } from './wisuda/wisuda.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AskAQuestionComponent } from './ask-a-question/ask-a-question.component';

const routingAplikasi: Routes = [
  { path: "akademik", redirectTo: "/transaksi", pathMatch: "full"},
  { path: "", component: HomeComponent },
  { path: "ask-a-question", component: AskAQuestionComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    AskAQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AkademikModule,
    AlumniModule,
    CareerCenterModule,
    HospitalityModule,
    KemahasiswaanModule,
    KepegawaianModule,
    KeuanganModule,
    LaboratoriumModule,
    LayananPoliklinikModule,
    ParkirModule,
    PenelitianDanPengabdianModule,
    PengumumanAkademikModule,
    PercetakanModule,
    PerpustakaanModule,
    SemesterPendekModule,
    SemesterRegulerModule,
    SiAdinModule,
    WisudaModule,
    RouterModule.forRoot(routingAplikasi)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { CallCenterComponent } from './call-center/call-center.component';
import { OnlineYahooComponent } from './online-yahoo/online-yahoo.component';
import { SmsCenterComponent } from './sms-center/sms-center.component';

const routingHospitality : Routes = [
  { path: "hospitality/call-center", component: CallCenterComponent },
  { path: "hospitality/online-yahoo", component: OnlineYahooComponent },
  { path: "hospitality/sms-center", component: SmsCenterComponent }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingHospitality)
  ],
  declarations: [CallCenterComponent, OnlineYahooComponent, SmsCenterComponent]
})
export class HospitalityModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallCenterComponent } from './call-center/call-center.component';
import { OnlineYahooComponent } from './online-yahoo/online-yahoo.component';
import { SmsCenterComponent } from './sms-center/sms-center.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CallCenterComponent, OnlineYahooComponent, SmsCenterComponent]
})
export class HospitalityModule { }

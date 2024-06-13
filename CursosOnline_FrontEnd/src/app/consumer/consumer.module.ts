import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumerRoutingModule } from './consumer-routing.module';
import { DashboardConsumerComponent } from './dashboard-consumer/dashboard-consumer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardConsumerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConsumerRoutingModule
  ]
})
export class ConsumerModule { }

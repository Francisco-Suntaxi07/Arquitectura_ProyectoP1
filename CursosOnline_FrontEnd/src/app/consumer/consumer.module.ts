import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumerRoutingModule } from './consumer-routing.module';
import { DashboardConsumerComponent } from './dashboard-consumer/dashboard-consumer.component';


@NgModule({
  declarations: [
    DashboardConsumerComponent
  ],
  imports: [
    CommonModule,
    ConsumerRoutingModule
  ]
})
export class ConsumerModule { }

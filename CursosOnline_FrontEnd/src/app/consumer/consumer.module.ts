import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsumerRoutingModule } from './consumer-routing.module';
import { DashboardConsumerComponent } from './dashboard-consumer/dashboard-consumer.component';
import { SharedModule } from '../shared/shared.module';
import { AllCoursesComponent } from './all-courses/all-courses.component';


@NgModule({
  declarations: [
    DashboardConsumerComponent,
    AllCoursesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ConsumerRoutingModule
  ]
})
export class ConsumerModule { }

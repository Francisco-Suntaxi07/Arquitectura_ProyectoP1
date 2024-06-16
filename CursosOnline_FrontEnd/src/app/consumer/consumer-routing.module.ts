import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardConsumerComponent } from './dashboard-consumer/dashboard-consumer.component';
import { AllCoursesComponent } from './all-courses/all-courses.component'; 

const routes: Routes = [
  { path: '', component: DashboardConsumerComponent },
  { path: 'all-courses', component: AllCoursesComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerRoutingModule { }

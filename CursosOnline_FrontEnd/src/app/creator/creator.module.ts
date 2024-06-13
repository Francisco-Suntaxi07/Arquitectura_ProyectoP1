import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorRoutingModule } from './creator-routing.module';
import { DashboardCreatorComponent } from './dashboard-creator/dashboard-creator.component';


@NgModule({
  declarations: [
    DashboardCreatorComponent
  ],
  imports: [
    CommonModule,
    CreatorRoutingModule
  ]
})
export class CreatorModule { }

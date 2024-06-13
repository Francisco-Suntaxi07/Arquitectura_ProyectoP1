import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorRoutingModule } from './creator-routing.module';
import { DashboardCreatorComponent } from './dashboard-creator/dashboard-creator.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardCreatorComponent
  ],
  imports: [
    CommonModule,
    CreatorRoutingModule,
    SharedModule
  ]
})
export class CreatorModule { }

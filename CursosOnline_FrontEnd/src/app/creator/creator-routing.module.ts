import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCreatorComponent } from './dashboard-creator/dashboard-creator.component';

const routes: Routes = [
  { path: '', component: DashboardCreatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorRoutingModule { }

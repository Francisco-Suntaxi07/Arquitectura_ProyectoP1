import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './consumer/all-courses/all-courses.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'creator', 
    loadChildren: () => import('./creator/creator.module').then(m => m.CreatorModule)
  },
  {
    path: 'consumer', 
    loadChildren: () => import('./consumer/consumer.module').then(m => m.ConsumerModule)
  },
  {
    path: 'all-courses',
    component: AllCoursesComponent 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

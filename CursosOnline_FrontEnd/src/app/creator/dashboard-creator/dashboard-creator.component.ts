import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignupComponent } from 'src/app/login/signup/signup.component';
import { CreatorService } from 'src/app/service/creator.service';
import { UserService } from 'src/app/service/user.service';
import { NewCourseComponent } from '../new-course/new-course.component';

@Component({
  selector: 'app-dashboard-creator',
  templateUrl: './dashboard-creator.component.html',
  styleUrls: ['./dashboard-creator.component.scss']
})
export class DashboardCreatorComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private creatorService: CreatorService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  openCreateCourse(): void {
    const dialogRef = this.dialog.open(NewCourseComponent);
  }

}

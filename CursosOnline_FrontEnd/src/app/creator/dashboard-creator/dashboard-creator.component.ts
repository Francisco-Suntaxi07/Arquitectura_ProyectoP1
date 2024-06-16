import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignupComponent } from 'src/app/login/signup/signup.component';
import { CreatorService } from 'src/app/service/creator.service';
import { UserService } from 'src/app/service/user.service';
import { NewCourseComponent } from '../new-course/new-course.component';
import { CourseService } from 'src/app/service/course.service';
import { CourseModel } from 'src/app/model/courseModel';

@Component({
  selector: 'app-dashboard-creator',
  templateUrl: './dashboard-creator.component.html',
  styleUrls: ['./dashboard-creator.component.scss']
})
export class DashboardCreatorComponent implements OnInit {

  private _coursesList: CourseModel[] = [];

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private creatorService: CreatorService,
    private courseService: CourseService,
  ) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.findByIdCreator("1012345678").subscribe({
      next: (response) => {
        this._coursesList = response;
      },
      error: (error) => {

        console.log(error);
      }
    });
  }


  openCreateCourse(): void {
    const dialogRef = this.dialog.open(NewCourseComponent);
  }

  public get coursesList(): CourseModel[] {
    return this._coursesList;
  }

}

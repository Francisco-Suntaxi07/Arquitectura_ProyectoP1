import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignupComponent } from 'src/app/login/signup/signup.component';
import { CreatorService } from 'src/app/service/creator.service';
import { UserService } from 'src/app/service/user.service';
import { NewCourseComponent } from '../new-course/new-course.component';
import { CourseService } from 'src/app/service/course.service';
import { CourseModel } from 'src/app/model/courseModel';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard-creator',
  templateUrl: './dashboard-creator.component.html',
  styleUrls: ['./dashboard-creator.component.scss']
})
export class DashboardCreatorComponent implements OnInit {

  private _coursesList: CourseModel[] = [];

  private _idUser: string = "";
  userName: string = "";

  constructor(
    public dialog: MatDialog,
    private creatorService: CreatorService,
    private courseService: CourseService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this._idUser = this.authService.getCurrentUser()?.id;
    this.userName = this.authService.getCurrentUser()?.name;
    this.loadCourses(this._idUser);
  }

  loadCourses(idUser: string): void {
    this.courseService.findByIdCreator(idUser).subscribe({
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
    dialogRef.afterClosed().subscribe(result => {
      this.loadCourses(this._idUser);
    });
  }

  public get coursesList(): CourseModel[] {
    return this._coursesList;
  }

}

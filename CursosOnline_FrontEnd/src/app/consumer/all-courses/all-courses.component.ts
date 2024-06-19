import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { CourseModel } from 'src/app/model/courseModel';
import { AuthService } from 'src/app/service/auth.service';
import { SubscriptionService } from 'src/app/service/subscription.service';
import { SubscriptionModel } from 'src/app/model/subscriptionModel';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {
  allCourses: CourseModel[] = [];
  filteredCourses: CourseModel[] = [];
  searchText: string = '';

  constructor(
    private courseService: CourseService,
    private authService: AuthService,
    private subscriptionService: SubscriptionService
  ) { }

  ngOnInit(): void {
    this.loadUserCourses();
  }

  loadUserCourses(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.id) {
      this.subscriptionService.findAll().subscribe({
        next: (subscriptions: SubscriptionModel[]) => {
          const userSubscriptions = subscriptions.filter(sub => sub.userId === currentUser.id);
          const userCourseIds = userSubscriptions.map(sub => sub.courseId) as number[];
          this.courseService.findAll().subscribe({
            next: (courses: CourseModel[]) => {
              this.allCourses = courses.filter(course => course.id && userCourseIds.includes(course.id));
              this.filteredCourses = [...this.allCourses];
            },
            error: (err) => {
              console.error('Error loading courses', err);
            }
          });
        },
        error: (err) => {
          console.error('Error loading subscriptions', err);
        }
      });
    }
  }

  filterCourses(): void {
    if (this.searchText.trim() === '') {
      this.filteredCourses = [...this.allCourses];
    } else {
      this.filteredCourses = this.allCourses.filter(course =>
        course.name?.toLowerCase().includes(this.searchText.trim().toLowerCase())
      );
    }
  }
}

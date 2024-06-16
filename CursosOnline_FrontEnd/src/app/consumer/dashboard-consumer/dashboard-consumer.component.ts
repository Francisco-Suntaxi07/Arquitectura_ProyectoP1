import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { CreatorService } from 'src/app/service/creator.service';
import { CourseModel } from 'src/app/model/courseModel';
import { forkJoin } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard-consumer',
  templateUrl: './dashboard-consumer.component.html',
  styleUrls: ['./dashboard-consumer.component.scss']
})
export class DashboardConsumerComponent implements OnInit {
  courses: CourseModel[] = [];
  stats = [
    { value: 23, label: 'MATERIAS', subLabel: 'DISPONIBLES', bgClass: 'bg-success' },
    { value: 120, label: 'CURSOS', subLabel: 'ONLINE', bgClass: 'bg-primary' },
    { value: 42, label: 'INSTRUCTORES', subLabel: 'REGISTRADOS', bgClass: 'bg-secondary' },
    { value: 6000, label: 'ESTUDIANTES', subLabel: 'FELICES', bgClass: 'bg-warning' },
  ];

  constructor(
    private courseService: CourseService, 
    private creatorService: CreatorService, 
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadCourses();
    console.log(this.authService.getCurrentUser()?.id);
  }

  loadCourses(): void {
    this.courseService.findAll().subscribe({
      next: (courses: CourseModel[]) => {
        const creatorObservables = courses.map(course =>
          this.creatorService.findById(course.creator as string)
        );

        forkJoin(creatorObservables).subscribe({
          next: (creators) => {
            this.courses = courses.map((course, index) => {
              course.creator = creators[index].name;
              return course;
            });
          },
          error: (err) => {
            console.error('Error loading creators', err);
          }
        });
      },
      error: (err) => {
        console.error('Error loading courses', err);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseService } from 'src/app/service/course.service';
import { CreatorService } from 'src/app/service/creator.service';
import { CourseModel } from 'src/app/model/courseModel';
import { forkJoin } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { CourseInscriptionComponent } from '../course-inscription/course-inscription.component';
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
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadCourses();
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
  openInscriptionModal(course: CourseModel): void {
    const dialogRef = this.dialog.open(CourseInscriptionComponent, {
      width: '400px',
      data: { course }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Inscripción confirmada para el curso:', result);
        // Aquí puedes agregar la lógica para manejar la inscripción
      }
    });
  }
}

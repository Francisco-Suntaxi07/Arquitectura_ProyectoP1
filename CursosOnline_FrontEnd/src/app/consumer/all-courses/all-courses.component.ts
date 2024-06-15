import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { CourseModel } from 'src/app/model/courseModel';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {
  allCourses: CourseModel[] = [];
  filteredCourses: CourseModel[] = [];
  searchText: string = '';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.findAll().subscribe({
      next: (data: CourseModel[]) => {
        this.allCourses = data;
       
        this.filteredCourses = [...this.allCourses];
      },
      error: (err) => {
        console.error('Error loading courses', err);
      }
    });
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


import { Component } from '@angular/core';
import { course } from './models';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent {
  displayedColumns: string[] = ['id', 'teacher', 'date', 'type', 'actions'];

  courses: course[] = []

  constructor(private coursesService: CoursesService) {
    this.coursesService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses
      }
    })
  }
}

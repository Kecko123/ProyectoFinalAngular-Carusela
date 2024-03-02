import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { course } from './models';

let courses: course[] = [
  { id: 1, teacher: 'Julian', date: "12/12", type: "angular"},
  { id: 2, teacher: 'Enzo', date: "12/12", type: "angular"},
  { id: 3, teacher: 'Lionel', date: "12/12", type: "angular"},
  { id: 4, teacher: 'Marcos', date: "12/12", type: "angular"},
] 

@Injectable({
  providedIn: 'root'
})


export class CoursesService {
  getCourses(){
    return of(courses)
  }

}

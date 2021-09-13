import { Component, OnInit } from '@angular/core';
import { Course } from '../../../projects/models/src/lib/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  courses: Course[] = [
    { course: 'Advanced Frontend', code: 'SWAFE', ects: '5' },
    { course: 'Advanced Backend', code: 'SWABE', ects: '5' },
    { course: 'Machine Learning', code: 'MAL', ects: '5' },
  ];
}

import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'projects/models/src/public-api';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss'],
})
export class CourseListItemComponent implements OnInit {
  @Input() course!: Course;

  constructor() {}

  ngOnInit(): void {}
}

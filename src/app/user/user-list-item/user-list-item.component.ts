import { Component, Input, OnInit } from '@angular/core';
import { Billionaire } from 'src/app/shared.service';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent implements OnInit {
  @Input() billionaire!: Billionaire;

  constructor() {}

  ngOnInit(): void {}
}

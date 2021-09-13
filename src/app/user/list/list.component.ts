import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Billionaire, SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  billionaires$: Observable<Billionaire[]>;

  constructor(private ss: SharedService) {
    this.billionaires$ = this.ss.getBillionaires();
  }

  ngOnInit(): void {}
}

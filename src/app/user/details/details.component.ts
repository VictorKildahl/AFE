import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Billionaire, SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  billionaire$: Observable<Billionaire>;

  constructor(
    private ss: SharedService,
    private activatedRoute: ActivatedRoute
  ) {
    this.billionaire$ = this.ss.getBillionaire(
      +this.activatedRoute.snapshot.params['id']
    );
  }

  ngOnInit(): void {}
}

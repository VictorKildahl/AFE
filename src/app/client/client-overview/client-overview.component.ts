import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-client-overview',
  templateUrl: './client-overview.component.html',
  styleUrls: ['./client-overview.component.scss'],
})
export class ClientOverviewComponent implements OnInit {
  clients$: Observable<any[]>;
  error = '';

  constructor(private cs: ClientService) {
    this.clients$ = this.cs.clients();
  }

  ngOnInit(): void {
    this.clients$ = this.cs.clients().pipe(
      catchError((e: HttpErrorResponse) => {
        console.error(e.message);
        if (e.status === 0) {
          this.error = 'Client-side or network error';
        } else {
          this.error = 'Endpoint returned an unsuccessful response code';
        }
        let error: ClientError = {
          message: e.message,
          status_code: e.status,
        };
        return of([error]);
      })
    );
  }
}
export interface ClientError {
  message: string;
  status_code: number;
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'projects/models/src/public-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  rootUrl = `http://localhost:3000`;

  constructor(private http: HttpClient) {}

  clients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.rootUrl}/clients/faulty`);
  }
}

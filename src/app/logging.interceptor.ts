import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const started = Date.now();
    let ok: string;

    return next.handle(request).pipe(
      tap(
        (event) => (ok = event instanceof HttpResponse ? 'succeeded' : ''),
        (error) => (ok = 'failed')
      ),
      finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${request.method} ${request.urlWithParams} ${ok} in ${elapsed} ms.`;
        console.log(msg);
      })
    );
  }
}

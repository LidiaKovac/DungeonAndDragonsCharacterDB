import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const clone = request.clone({
      headers: request.headers.set("authorization", `Bearer ${localStorage.getItem("dndToken")!}`)
    })
    return next.handle(clone).pipe(catchError((error)=> {
      this.router.navigate(['login'])
      return throwError(error)
    }));
  }
}

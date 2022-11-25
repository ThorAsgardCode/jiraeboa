import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
       let jwt = localStorage.getItem('jwt');
        if (jwt) {
            request = request.clone({
                setHeaders: {
                    idSession: jwt
                }
            });
        }

        return next.handle(request);
    }
}
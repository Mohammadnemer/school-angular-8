import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(sessionStorage.getItem("username") && sessionStorage.getItem("basicAuth") && request.url.search("login") == -1){
            request = request.clone({
                setHeaders:{
                    Authorization : sessionStorage.getItem("basicAuth")
                }
            })
        }
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                    console.log(request.method)
                    // this.errorDialogService.openDialog(event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                console.log(error)
                return throwError(error);
            }));
    }
}
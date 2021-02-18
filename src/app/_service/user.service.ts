import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()

export class UserService {

    private url: any = `${environment.HOST}`;

    mensajeCambio = new Subject<string>();

    constructor(private http: HttpClient) { }

    registrar(user: any): Observable<any>{
        return this.http.post(`api/register`, user);
    }

}
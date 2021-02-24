import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import { Session } from "inspector";
import {Observable} from "rxjs";
import { LoginObject } from "../_shared/login-object.model";

@Injectable()
export class AuthenticationService {

 constructor(private http: Http) {}

 private basePath = '/api/auth/';

 login(loginObj: LoginObject): Observable<Session> {
 return this.http.post(this.basePath + 'login', loginObj).map(this.extractData);
 }

 /*logout(): Observable<Boolean> {
 return this.http.post(this.basePath + 'logout', {}).map(this.extractData);
 }*/

 private extractData(res: Response) {
 let body = res.json();
 return body;
 }
}
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = `${environment.HOST}api/auth`;

  constructor(private http: HttpClient,
    private router: Router) { }

  login(usuario: string, contrasena: string) {
    const body = new HttpParams()
      .set('email', usuario)
      .set('password', contrasena)

      let headers = new HttpHeaders();
      headers.append('Access-Control-Allow-Headers', 'Content-Type');
      headers.append('Access-Control-Allow-Methods', 'POST');
      headers.append('Access-Control-Allow-Origin', '*');

      return this.http.post<any>(`${this.url}/login`, body, {headers: headers});
      //return this.http.post<any>(`/api/auth/login`, body);
  }

  /*cerrarSesion() {
    let token = sessionStorage.getItem(environment.TOKEN_NAME);

    this.http.get(`${environment.HOST}/cerrarSesion/anular/${token}`).subscribe(() => {
      sessionStorage.clear();
      this.router.navigate(['login']);
    });
  }

  estaLogueado(): boolean {
    let token = sessionStorage.getItem(environment.TOKEN_NAME);
    return token != null;
  }*/
}

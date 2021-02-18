import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SaleService {

    private url: any = `${environment.HOST}`;

    mensajeCambio = new Subject<string>();

    constructor(private http: HttpClient) { }

    guardarVenta(venta: any){
        return this.http.post(`${this.url}/ventas`, venta);
    }

    listarVenta(){
        return this.http.get<any>(`${this.url}/ventas`);
    }
}
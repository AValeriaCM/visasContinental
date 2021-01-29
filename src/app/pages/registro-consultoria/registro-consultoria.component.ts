import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-consultoria',
  templateUrl: './registro-consultoria.component.html',
  styleUrls: ['./registro-consultoria.component.scss']
})
export class RegistroConsultoriaComponent implements OnInit {

  foods: any[] = [
    {value: 'consultoria', viewValue: 'Consultoria'},
    {value: 'derechos-consulares', viewValue: 'Derechos Consulares'},
    {value: 'formularios', viewValue: 'Formularios'},
    {value: 'reserva-hotelera', viewValue: 'Reserva Hotelera'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

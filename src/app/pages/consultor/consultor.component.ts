import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultor',
  templateUrl: './consultor.component.html',
  styleUrls: ['./consultor.component.scss']
})
export class ConsultorComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'cedula', 'celular', 'correo', 'acciones'];

  @ViewChild(MatSort, { static : true }) sort: MatSort;
  cantidad: number;
  pageIndex = 0;
  pageSize = 5;

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}

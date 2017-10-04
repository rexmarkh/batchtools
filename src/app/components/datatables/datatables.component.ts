import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-4-data-table';
import { films } from './datatable-data';

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styleUrls: ['./datatables.component.scss']
})
export class DatatablesComponent implements OnInit {
  ngOnInit() {
  }
  filmResource = new DataTableResource(films);
  films = [];
  filmCount = 0;

  @ViewChild(DataTable) filmsTable;

  constructor() {
      this.filmResource.count().then(count => this.filmCount = count);
  }

  reloadFilms(params) {
      this.filmResource.query(params).then(films => this.films = films);
  }

  cellColor(car) {
      return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7)/1.3)*100)) + ')';
  };

  // special params:

  translations = <DataTableTranslations>{
      indexColumn: 'Index column',
      expandColumn: 'Expand column',
      selectColumn: 'Select column',
      paginationLimit: 'Max results',
      paginationRange: 'Result range'
  };
}

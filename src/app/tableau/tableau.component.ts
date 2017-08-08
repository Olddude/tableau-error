import { Component, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public tableauSubmit(): void {
    tableau.connectionName = 'testconnection';
    tableau.connectionData = {
      schema: {
        id: tableau.connectionName,
        alias: tableau.connectionName + ' data',
        columns: [
          {id: 'date', alias: 'date', dataType: tableau.dataTypeEnum.datetime},
          {id: 'value', alias: 'value', dataType: tableau.dataTypeEnum.float},
          {id: 'unit', alias: 'unit', dataType: tableau.dataTypeEnum.string}
        ]
      },
      data: [
        { date: '2017-01-01T12:00:00', value: 0.53, unit: 'foo' },
        { date: '2017-01-01T13:00:00', value: 0.63, unit: 'foo' },
        { date: '2017-01-01T14:00:00', value: 0.73, unit: 'foo' },
        { date: '2017-01-01T15:00:00', value: 0.83, unit: 'foo' }
      ]
    };
    tableau.submit();
  }
}

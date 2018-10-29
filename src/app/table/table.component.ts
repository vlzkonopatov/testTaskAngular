import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() option: OptionTable;
  @Input() source: Table;
  objectKeys = Object.keys;
  constructor() {
  }

  ngOnInit() {
    // console.log(this.source);

  }


}

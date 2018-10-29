import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  options: OptionTable = { sort: '' };
  data: Table[];
  load: boolean;

  constructor(private appService: AppService) {
    this.load = false;
  }

  ngOnInit() {
    this.load = true;
    setTimeout(() => this.getLogin(), 1000);
  }

  private getLogin() {
    this.appService.getTable()
      .pipe(finalize(() => {
        this.load = false;
      })).subscribe((data: Table[]) => {
      this.data = data;
    });
  }
}

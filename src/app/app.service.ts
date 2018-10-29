import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

const URL = 'http://localhost:4200/';


const routes = {
  services: () => `assets/tableInfo.json`
};

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {
  }

  public getTable() {
    return this.httpClient
      .request('GET', routes.services())
      .pipe(map((res: any) => {
          return res;
        })
      );
  }

}

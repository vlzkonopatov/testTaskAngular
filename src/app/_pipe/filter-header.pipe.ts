import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHeader'
})
export class FilterHeaderPipe implements PipeTransform {
  headerItem: Array<any>;

  transform(value: any, args?: any): any {
    this.headerItem = [];
    console.log(value);
    const obj = Object.keys(value).map((k) => k);
    console.log(obj);


    return this.headerItem;
  }

}

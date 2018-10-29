import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterHeader'
})
export class FilterHeaderPipe implements PipeTransform {
  headerItem: Array<any>;
  element: any;

  transform(value: any, args?: any): any {
    this.headerItem = [];
    this.element = value;
    // console.log(this.element);

    let item = this.objToArray(this.element);

    console.log(item);


    return this.headerItem;
  }

  public objToArray(object) {

    console.log(object);

    let obj = Object.keys(object).map((k) => k);

   return obj.map((key) => {
        console.log(key);

        if (typeof object[key] === "object") {
          return {"title": key, "value": this.objToArray(object[key])}
        }

        return {"title": key}
      });
  }

}

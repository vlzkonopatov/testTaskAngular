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

    let item = [];
    item.push(this.objToArray(this.element));

    console.log(this.headerItem);


    return this.headerItem;
  }

  public objToArray(object) {

    console.log(object);

    let obj = Object.keys(object).map((k) => k);

    this.headerItem.push(obj.map((key) => {
        console.log(key);

        if (typeof object[key] === "object") {
          this.objToArray(object[key])
        }

        return key
      })
    );
  }

}

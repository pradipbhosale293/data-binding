import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cust'
})
export class CustPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let txt = value;
    console.log(args);
    return value *2;
  }

}

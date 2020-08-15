import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], args: any[]): any {
    const sortFiled = args[0];
    const sortDirection = args[1];

    let multiplier = 1;
    if (sortDirection === 'desc'){
      multiplier = -1;
    }

    value.sort((a: any, b: any) => {
      if (a[sortFiled] < b[sortFiled]){
        return -1 * multiplier;
      }else if (a[sortFiled] > b[sortFiled]){
        return 1 * multiplier;
      }else{
        return 0;
      }
    });

    return value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) {
      return value;
    }
    const resultRestaurant = [];
    for (const restaurant of value) {
      if (restaurant.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultRestaurant.push(restaurant);
      }
    }
    return resultRestaurant;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import {Heroe} from "../interfaces/sales.interface";

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(heroes: Heroe[], orderBy: string = 'without value'): Heroe[] {

    switch (orderBy){
      case 'name':
        return heroes.sort((a, b) => (a.name > b.name) ? 1 : -1);
        break;
      case 'vuela':
        return heroes.sort((a, b) => (a.vuela > b.vuela) ? -1 : 1);
        break;
      case 'color':
        return heroes.sort((a, b) => (a.color > b.color) ? 1 : -1);
        break;
      default:
        return heroes;
    }
  }

}

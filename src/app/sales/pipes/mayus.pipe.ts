import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'mayus'
})
export class MayusPipe implements PipeTransform{
  transform(value: string, inMayus: boolean = true): string {
    return (inMayus) ? value.toUpperCase() : value.toLowerCase();

  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'arrayToString',
})
export class ArrayToStringPipe implements PipeTransform {
  transform(array: string[] | number[], separator = ', '): string {
    return array.map((value) => String(value)).join(separator);
  }
}

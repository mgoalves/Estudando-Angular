import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let words = value.split(' ');
    console.log(words);

    let result = '';
    for (let word of words) {
      result += this.capitalize(word) + ' ';
    }

    console.log(result);
    return result;
  }

  capitalize(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumber',
  standalone: true
})
export class CardNumberPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    value = value.replace(/\D/g, '');

    return value.replace(/(\d{4})(?=\d)/g, '$1 - ');
    // return value.replace(/(\d{4})*$/g, '$1 - ');
  }

  }





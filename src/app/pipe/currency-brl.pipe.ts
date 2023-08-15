import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyBRL'
})
export class CurrencyBRLPipe implements PipeTransform {
  transform(value: number | string): string {
    if (typeof value === 'string') {
      value = parseFloat(value);
    }

    if (isNaN(value)) {
      return '';
    }

    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}

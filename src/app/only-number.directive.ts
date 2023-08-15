import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCurrencyMask]',
})
export class CurrencyMaskDirective {
  @HostListener('input', ['$event'])
  handleInputChange(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); 
    value = value.replace(/^0+/, ''); 

    while (value.length < 3) {
      value = '0' + value;
    }

    value = this.toRealCurrency(value);

    input.value = value;
  }

  private toRealCurrency(value: string): string {
    const mainValue = value.substring(0, value.length - 2);
    const decimal = value.substring(value.length - 2);

    const reversedMainValue = mainValue.split('').reverse().join('');
    const matchedParts = reversedMainValue.match(/.{1,3}/g);

    if (!matchedParts) {
      return '0,00';
    }

    const parts = matchedParts.join('.').split('').reverse().join('');

    return `${parts},${decimal}`;
  }
}

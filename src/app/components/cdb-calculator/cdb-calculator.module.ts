import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdbCalculatorComponent } from './cdb-calculator.component';
import { CdbCalculatorRoutingModule } from './cdb-calculator-routing.module';
import { CurrencyBRLPipe } from 'src/app/pipe/currency-brl.pipe';
import { CurrencyMaskDirective } from 'src/app/only-number.directive';

@NgModule({
  declarations: [
    CdbCalculatorComponent,
    CurrencyBRLPipe,
    CurrencyMaskDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CdbCalculatorRoutingModule
  ]
})
export class CdbCalculatorModule { }

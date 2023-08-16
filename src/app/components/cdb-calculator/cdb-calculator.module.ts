import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdbCalculatorComponent } from './cdb-calculator.component';
import { CdbCalculatorRoutingModule } from './cdb-calculator-routing.module';
import { CurrencyBRLPipe } from 'src/app/pipe/currency-brl.pipe';
import { NgxCurrencyDirective } from 'ngx-currency';

@NgModule({
  declarations: [
    CdbCalculatorComponent,
    CurrencyBRLPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CdbCalculatorRoutingModule,
    NgxCurrencyDirective
  ]
})
export class CdbCalculatorModule { }

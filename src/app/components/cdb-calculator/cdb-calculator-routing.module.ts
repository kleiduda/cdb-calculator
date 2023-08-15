import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdbCalculatorComponent } from './cdb-calculator.component';

const routes: Routes = [{ path: '', component: CdbCalculatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdbCalculatorRoutingModule { }
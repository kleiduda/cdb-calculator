import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'calculadora-cdb', pathMatch: 'full' },
  { path: 'calculadora-cdb', loadChildren: () => import('./components/cdb-calculator/cdb-calculator.module').then(m => m.CdbCalculatorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

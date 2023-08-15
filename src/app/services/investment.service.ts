import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CdbCalculatorRequest } from '../model/cdb-calculator-request.model';
import { ServiceResult } from '../model/service-result.model';
import { InvestmentResult } from '../model/investment-result.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  protected apiUrl = 'https://localhost:7078/api/Investment'; 

  constructor(private http: HttpClient) {}

  calculate(item: CdbCalculatorRequest): Observable<ServiceResult<InvestmentResult>> {
    return this.http.post<ServiceResult<InvestmentResult>>(this.apiUrl, item);
  }
}

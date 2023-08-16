import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { catchError } from 'rxjs';
import { CdbCalculatorRequest } from 'src/app/model/cdb-calculator-request.model';
import { InvestmentResult } from 'src/app/model/investment-result.model';
import { ServiceResult } from 'src/app/model/service-result.model';
import { InvestmentService } from 'src/app/services/investment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cdb-calculator',
  templateUrl: './cdb-calculator.component.html',
  styleUrls: ['./cdb-calculator.component.scss'],
})
export class CdbCalculatorComponent {
  formData!: FormGroup;
  isLoading: boolean = true;

  cdbCalculator!: CdbCalculatorRequest;
  investmentresult: any = {};

  fieldNames: { [key: string]: string } = {
    initialValue: 'Valor Inicial',
    periodInMonths: 'Periodo',
  };

  constructor(private fb: FormBuilder, private service: InvestmentService) {}

  ngOnInit(): void {
    //
    this.formData = this.fb.group(
      {
        initialValue: ['', [Validators.required, this.greaterThanZero]],
        periodInMonths: ['', Validators.required],
      },
      {
        updateOn: 'blur',
      }
    );
  }

  onSubmit() {
    let v = this.formData.value;
    let cdb: CdbCalculatorRequest = CdbCalculatorRequest.create(
      v.initialValue,
      v.periodInMonths
    );

    if (this.formData.valid) {
      this.service
        .calculate(cdb)
        .pipe(
          catchError((error: any) => {
            Swal.fire({
              title: 'Erro',
              text: 'Erro na chamada da API',
              icon: 'error',
            });
            throw error;
          })
        )
        .subscribe((ret: ServiceResult<InvestmentResult>) => {
          if (ret.Status) {
            this.investmentresult = ret.Result;
            this.isLoading = false;
          } else {
            Swal.fire({
              title: 'Alerta!',
              text: ret.Mensagens[0],
              icon: 'info',
            });
          }
        });
    }
  }

  //additional methods
  getErrorMessage(controlName: string): string {
    const fieldName = this.fieldNames[controlName] || controlName;
    const control = this.formData.get(controlName);

    if (control) {
      if (control.hasError('required')) {
        return `"${fieldName}" é obrigatório.`;
      }
    }
    return '';
  }

  greaterThanZero(control: AbstractControl): ValidationErrors | null {
    return control.value > 0 ? null : { notGreaterThanZero: true };
  }
}

export class CdbCalculatorRequest{
 InitialValue!: number;
 PeriodInMonths!: number;

 private constructor(){}

 static create(initialValue: number, periodInMonths: number){
    const cdbCalculator = new CdbCalculatorRequest();

    cdbCalculator.InitialValue = initialValue;
    cdbCalculator.PeriodInMonths = periodInMonths;

    return cdbCalculator;
 }
}
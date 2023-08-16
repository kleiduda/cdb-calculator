import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CdbCalculatorComponent } from './cdb-calculator.component';
import { InvestmentService } from 'src/app/services/investment.service';
import { CdbCalculatorModule } from 'src/app/components/cdb-calculator/cdb-calculator.module';

describe('CdbCalculatorComponent', () => {
  let component: CdbCalculatorComponent;
  let fixture: ComponentFixture<CdbCalculatorComponent>;
  let mockService: jasmine.SpyObj<InvestmentService>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('InvestmentService', ['calculate']);

    await TestBed.configureTestingModule({
      declarations: [CdbCalculatorComponent],
      imports: [ReactiveFormsModule, CdbCalculatorModule],
      providers: [{ provide: InvestmentService, useValue: mockService }],
    }).compileComponents();

    fixture = TestBed.createComponent(CdbCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Verifica se o componente foi criado
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Verifica se os campos do formulário foram inicializados
  it('should have initialized form fields', () => {
    expect(component.formData.get('initialValue')).toBeTruthy();
    expect(component.formData.get('periodInMonths')).toBeTruthy();
  });
  
});

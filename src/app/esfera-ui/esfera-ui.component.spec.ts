import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EsferaUiComponent } from './esfera-ui.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('EsferaUiComponent', () => {
  let component: EsferaUiComponent;
  let fixture: ComponentFixture<EsferaUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EsferaUiComponent, FormsModule, CommonModule]  // Importa el componente y los módulos necesarios
    }).compileComponents();

    fixture = TestBed.createComponent(EsferaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call calcularVolumen when the button is clicked', () => {
    spyOn(component, 'calcularVolumen');  // Espía el método
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.calcularVolumen).toHaveBeenCalled();
  });

  it('should calculate volume correctly when valid values are entered', () => {
    component.radio = 3;
    component.altura = 4;
    component.calcularVolumen();
    expect(component.volumen).toBeCloseTo((4 / 3) * Math.PI * Math.pow(3, 3), 5);
  });

  it('should display error message if non-numeric values are entered', () => {
    component.radio = NaN;
    component.altura = NaN;
    component.calcularVolumen();
    expect(component.errorMessage).toBe('Por favor ingrese valores válidos.');
  });
});

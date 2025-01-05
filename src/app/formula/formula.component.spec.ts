import { TestBed } from '@angular/core/testing';
import { FormulaComponent } from './formula.component';

describe('FormulaComponent', () => {
  let component: FormulaComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaComponent],  // Asegúrate de que FormulaComponent esté en 'imports' si es standalone
    }).compileComponents();

    fixture = TestBed.createComponent(FormulaComponent);
    component = fixture.componentInstance;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería calcular el volumen correctamente con datos válidos', () => {
    component.altura = 5;
    component.radio = 3;
    component.resultado = Math.PI * Math.pow(3, 2) * 5;
    expect(component.calcularVolumen()).toBeCloseTo(component.resultado, 5);
  });

  it('debería devolver 0 si la altura es 0', () => {
    component.altura = 0;
    component.radio = 3;
    expect(component.calcularVolumen()).toBe(0);
  });

  it('debería devolver 0 si el radio es 0', () => {
    component.altura = 5;
    component.radio = 0;
    expect(component.calcularVolumen()).toBe(0);
  });

  it('debería devolver 0 si ambos valores son 0', () => {
    component.altura = 0;
    component.radio = 0;
    expect(component.calcularVolumen()).toBe(0);
  });

  it('debería calcular el área de superficie correctamente con radio = 3 y altura = 5', () => {
    component.altura = 5;
    component.radio = 3;
    component.resultado = 2 * Math.PI * 3 * (3 + 5);
    expect(component.calcularAreaSuperficie()).toBeCloseTo(component.resultado, 5);
  });

  it('debería calcular correctamente el volumen de un cilindro con radio 2 y altura 4', () => {
    component.altura = 4;
    component.radio = 2;
    component.resultado = Math.PI * Math.pow(2, 2) * 4;
    expect(component.calcularVolumen()).toBeCloseTo(component.resultado, 5);
  });

  it('debería manejar números negativos correctamente (volumen)', () => {
    component.altura = -5;
    component.radio = -3;
    expect(component.calcularVolumen()).toBe(0);
  });

  it('debería manejar valores extremadamente grandes sin errores', () => {
    component.altura = 1e6;
    component.radio = 1e6;
    const expectedVolumen = Math.PI * Math.pow(1e6, 2) * 1e6;
    expect(component.calcularVolumen()).toBeCloseTo(expectedVolumen, 5);
  });

  it('debería mostrar mensaje de error si los valores no son numéricos', () => {
    component.altura = NaN;  // Asignamos NaN a altura
    component.radio = 'abc' as any;  // Asignamos un valor no numérico a radio
    expect(component.calcularVolumen()).toBe(0);  // Esperamos que el volumen sea 0
  });
  it('debería retornar 0 si los valores son negativos', () => {
    component.radio = -5;
    component.altura = -10;
    expect(component.calcularVolumen()).toBe(0);
  });

  it('debería retornar 0 si los valores son cero', () => {
    component.radio = 0;
    component.altura = 10;
    expect(component.calcularVolumen()).toBe(0);
    
    component.radio = 10;
    component.altura = 0;
    expect(component.calcularVolumen()).toBe(0);
  });

  it('debería calcular el volumen correctamente con valores válidos', () => {
    component.radio = 5;
    component.altura = 10;
    const volumenEsperado = Math.PI * Math.pow(5, 2) * 10;
    expect(component.calcularVolumen()).toBeCloseTo(volumenEsperado, 2);  // Aseguramos que sea un valor cercano
  });

  it('debería calcular el volumen correctamente con valores decimales', () => {
    component.radio = 5.5;
    component.altura = 10.5;
    const volumenEsperado = Math.PI * Math.pow(5.5, 2) * 10.5;
    expect(component.calcularVolumen()).toBeCloseTo(volumenEsperado, 2);
  });
  
});

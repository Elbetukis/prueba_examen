import { Component } from '@angular/core';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css'],
  standalone: true
})
export class FormulaComponent {
  // Propiedades que se usan en los cálculos
  radio: number = 0;
  altura: number = 0;
  resultado: number = 0;
  resultadoSuperficie: number = 0;

  // Método para calcular el volumen de un cilindro
  calcularVolumen(): number {
    if (isNaN(this.radio) || isNaN(this.altura) || this.radio <= 0 || this.altura <= 0) {
      return 0;
    }
    return Math.PI * Math.pow(this.radio, 2) * this.altura;
  }
  
  

  // Método para calcular el área de superficie de un cilindro
  calcularAreaSuperficie(): number {
    if (this.radio <= 0 || this.altura <= 0) {
      return 0;
    }
    return 2 * Math.PI * this.radio * (this.radio + this.altura);
  }

  // Método para actualizar el resultado mostrado en la interfaz
  actualizarResultado(): void {
    this.resultado = this.calcularVolumen();
    this.resultadoSuperficie = this.calcularAreaSuperficie();
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-esfera-ui',
  standalone: true,
  imports: [FormsModule,CommonModule], // Importa FormsModule aquí
  templateUrl: './esfera-ui.component.html',
  styleUrls: ['./esfera-ui.component.css']
})
export class EsferaUiComponent {
  radio: number = 0;
  altura: number = 0;
  volumen: number | null = null;
  errorMessage: string | null = null;

  calcularVolumen(): void {
    if (isNaN(this.radio) || isNaN(this.altura)) {
      this.errorMessage = 'Por favor ingrese valores válidos.';
      this.volumen = null;
    } else {
      this.errorMessage = null;
      const pi = Math.PI;
      this.volumen = (4 / 3) * pi * Math.pow(this.radio, 3);
    }
  }
}

import { Component } from '@angular/core';
import { EsferaUiComponent } from './esfera-ui/esfera-ui.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EsferaUiComponent],  // Importa el componente standalone
  template: `<app-esfera-ui></app-esfera-ui>`,  // Usa el componente aquí
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora de Volumen';
}

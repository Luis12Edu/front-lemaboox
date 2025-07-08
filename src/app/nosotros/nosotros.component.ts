import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  seccion: 'nosotros' | 'filosofia' | 'valores' = 'nosotros';

  valores = [
  {
    icono: 'Integridad.webp',
    nombre: 'Integridad',
    descripcion: 'Actuamos con ética y responsabilidad en cada proyecto, garantizando confianza y transparencia.'
  },
  {
    icono: 'Innovacion.webp',
    nombre: 'Innovación',
    descripcion: 'Aprovechamos soluciones creativas y tecnologías de vanguardia para mejorar procesos.'
  },
  {
    icono: 'Colaboracion.webp',
    nombre: 'Colaboración',
    descripcion: 'Impulsamos el trabajo en equipo y la comunicación efectiva, alineando esfuerzos estratégicos.'
  },
  {
    icono: 'Excelencia.webp',
    nombre: 'Excelencia',
    descripcion: 'Buscamos superar los estándares en calidad y resultados con profesionalismo constante.'
  },
  {
    icono: 'Eficiencia.webp',
    nombre: 'Eficiencia',
    descripcion: 'Reducimos desperdicios, optimizamos tiempos y maximizamos el uso de recursos.'
  },
  {
    icono: 'Transparencia.webp',
    nombre: 'Transparencia',
    descripcion: 'Convertir la gestión administrativa en una ventaja competitiva, diseñando procesos claros, eficientes y automatizados.'
  }
];
}

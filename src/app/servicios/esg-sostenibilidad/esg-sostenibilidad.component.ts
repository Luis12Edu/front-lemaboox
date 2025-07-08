import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esg-sostenibilidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './esg-sostenibilidad.component.html',
  styleUrl: './esg-sostenibilidad.component.css'
})
export class EsgSostenibilidadComponent {

 @ViewChild('carrusel') carrusel!: ElementRef;

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/servicios']);
  }

  scrollIzquierda() {
    this.carrusel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollDerecha() {
    this.carrusel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  subservicios: {
    titulo: string;
    descripcion: string;
    beneficios: string[];
    extra?: string;
    imagen: string;
  }[] = [
    {
      titulo: '9.1 Diseño de Estrategias para la Sostenibilidad Empresarial',
      descripcion: 'Elaboramos planes que integran objetivos ambientales, sociales y de gobernanza a largo plazo.',
      beneficios: [
        'Posicionamiento como empresa social y ambientalmente responsable.',
        'Mayor confianza de inversionistas, clientes y colaboradores.',
        'Reducción de riesgos legales y reputacionales.'
      ],
      imagen: 'assets/subservicios/9_1-estrategias.webp'
    },
    {
      titulo: '9.2 Implementación de Procesos Lean con Enfoque Sostenible',
      descripcion: 'Aplicamos herramientas Lean para reducir impacto ambiental y fomentar eficiencia energética.',
      beneficios: [
        'Menor impacto ambiental y consumo energético.',
        'Alineación de la eficiencia operativa con la sostenibilidad.',
        'Reducción de costos operativos.'
      ],
      imagen: 'assets/subservicios/9_2-procesos.webp'
    },
    {
      titulo: '9.3 Auditorías Sostenibles',
      descripcion: 'Evaluamos el cumplimiento de normativas ambientales y sociales con planes de mejora.',
      beneficios: [
        'Transparencia en el desempeño ambiental y social.',
        'Identificación de áreas críticas y prioridades de acción.',
        'Preparación para certificaciones y estándares internacionales.'
      ],
      imagen: 'assets/subservicios/9_3-auditorias.webp'
    },
    {
      titulo: '9.4 Programas de Sensibilización y Formación en ESG',
      descripcion: 'Capacitamos al personal en prácticas éticas y sostenibles alineadas con los valores institucionales.',
      beneficios: [
        'Fortalecimiento del sentido de responsabilidad social.',
        'Mayor involucramiento del equipo en temas ESG.',
        'Alineación del comportamiento interno con los valores institucionales.'
      ],
      imagen: 'assets/subservicios/9_4-programas.webp'
    },
    {
      titulo: '9.5 Integración de Métricas ESG en Sistemas de Gestión',
      descripcion: 'Diseñamos indicadores específicos ESG para control y seguimiento dentro de los sistemas existentes.',
      beneficios: [
        'Trazabilidad y control del desempeño sostenible.',
        'Respuesta ágil ante cambios regulatorios.',
        'Visibilidad clara para toma de decisiones responsables.'
      ],
      imagen: 'assets/subservicios/9_5-integracion.webp'
    }
  ];
}

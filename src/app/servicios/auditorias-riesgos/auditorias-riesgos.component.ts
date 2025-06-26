import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auditorias-riesgos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auditorias-riesgos.component.html',
  styleUrl: './auditorias-riesgos.component.css'
})
export class AuditoriasRiesgosComponent {
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
      titulo: '4.1 Auditorías Integrales (Temáticas, Internas y Externas)',
      descripcion: 'Identificamos desviaciones y áreas de mejora clave en procesos organizacionales.',
      beneficios: [
        'Diagnóstico objetivo y focalizado de áreas críticas.',
        'Detección oportuna de incumplimientos o debilidades.',
        'Mayor preparación para auditorías externas o certificaciones.'
      ],
      imagen: 'assets/subservicios/4_1-auditorias.png'
    },
    {
      titulo: '4.2 Control de Calidad',
      descripcion: 'Establecemos sistemas de monitoreo para asegurar consistencia en los resultados.',
      beneficios: [
        'Estandarización y cumplimiento de normas internas.',
        'Identificación y corrección de desviaciones.',
        'Mejora sostenida de la calidad del servicio.'
      ],
      imagen: 'assets/subservicios/4_2-calidad.png'
    },
    {
      titulo: '4.3 Planes de Acciones Integrales',
      descripcion: 'Diseñamos acciones correctivas y preventivas para prevenir errores recurrentes.',
      beneficios: [
        'Disminución de errores y fallos recurrentes.',
        'Fortalecimiento de la capacidad de respuesta.',
        'Cultura de mejora continua y prevención.'
      ],
      imagen: 'assets/subservicios/4_3-planes.png'
    },
    {
      titulo: '4.4 Gestión Integral de Riesgos',
      descripcion: 'Metodologías para clasificar, mitigar y anticipar riesgos estratégicos y operativos.',
      beneficios: [
        'Reducción de riesgos críticos.',
        'Mayor capacidad de adaptación ante contingencias.',
        'Continuidad operativa y sostenibilidad empresarial.'
      ],
      imagen: 'assets/subservicios/4_4-gestion.png'
    },
    {
      titulo: '4.5 Mapeo de Procesos Clave',
      descripcion: 'Visualizamos procesos prioritarios para facilitar control, mejora y alineación institucional.',
      beneficios: [
        'Visualización completa de los flujos prioritarios.',
        'Identificación de oportunidades de optimización.',
        'Mejora en la toma de decisiones operativas.'
      ],
      imagen: 'assets/subservicios/4_5-mapeo.png'
    },
    {
      titulo: '4.6 Seguimiento de Indicadores Clave (KPI)',
      descripcion: 'Herramientas visuales para monitorear indicadores y evaluar resultados en tiempo real.',
      beneficios: [
        'Información clara y accesible para todo el equipo.',
        'Toma de decisiones basada en datos.',
        'Fomento de una cultura orientada a resultados.'
      ],
      imagen: 'assets/subservicios/4_6-seguimiento.png'
    },
    {
      titulo: '4.7 Evaluación Externa de Calidad de Servicio',
      descripcion: 'Aplicamos encuestas y análisis para conocer la percepción del cliente y mejorar la experiencia.',
      beneficios: [
        'Retroalimentación objetiva y continua.',
        'Mejora en la atención y servicio al cliente.',
        'Reputación fortalecida ante el mercado.'
      ],
      imagen: 'assets/subservicios/4_7-evaluacion.png'
    }
  ];
}

import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formacion-organizacional',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formacion-organizacional.component.html',
  styleUrl: './formacion-organizacional.component.css'
})
export class FormacionOrganizacionalComponent {

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
      titulo: '6.1 Capacitación y Desarrollo Administrativo',
      descripcion: 'Ofrecemos talleres y cursos para mejorar las competencias administrativas del personal.',
      beneficios: [
        'Incremento en la eficiencia operativa.',
        'Aplicación práctica de herramientas administrativas.',
        'Mejora en la toma de decisiones cotidianas.'
      ],
      imagen: 'assets/subservicios/6_1-capacitacion.webp'
    },
    {
      titulo: '6.3 Gestión del Tiempo y Productividad',
      descripcion: 'Capacitamos en metodologías para organizar, priorizar y gestionar el tiempo de forma efectiva.',
      beneficios: [
        'Mayor organización personal y grupal.',
        'Disminución de retrabajos y desperdicios de tiempo.',
        'Incremento en la productividad individual y colectiva.'
      ],
      imagen: 'assets/subservicios/6_3-gestion.webp'
    },
    {
      titulo: '6.4 Formación en Habilidades Blandas (Soft Skills)',
      descripcion: 'Desarrollamos habilidades clave como liderazgo, comunicación, trabajo en equipo y resolución de conflictos.',
      beneficios: [
        'Mejora del clima laboral y la colaboración interna.',
        'Desarrollo de líderes con visión estratégica.',
        'Equipos más cohesionados y resilientes.'
      ],
      imagen: 'assets/subservicios/6_4-formacion.webp'
    },
    {
      titulo: '6.5 Análisis del Clima Organizacional',
      descripcion: 'Aplicamos herramientas de diagnóstico para evaluar satisfacción, liderazgo y ambiente laboral.',
      beneficios: [
        'Identificación de áreas de mejora en la cultura organizacional.',
        'Prevención de conflictos internos.',
        'Aumento en la retención y compromiso del talento humano.'
      ],
      imagen: 'assets/subservicios/6_5-analisis.webp'
    },
    {
      titulo: '6.6 Servicio “Hablemos: Talk Me”',
      descripcion: 'Creamos espacios confidenciales donde los colaboradores pueden expresar inquietudes y sugerencias.',
      beneficios: [
        'Promoción de una comunicación abierta y saludable.',
        'Detección temprana de problemas internos.',
        'Clima laboral más armónico y transparente.'
      ],
      imagen: 'assets/subservicios/6_6-servicio.webp'
    }
  ];
}

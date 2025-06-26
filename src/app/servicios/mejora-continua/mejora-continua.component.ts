import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mejora-continua',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mejora-continua.component.html',
  styleUrl: './mejora-continua.component.css'
})
export class MejoraContinuaComponent {

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
      titulo: '7.1 Aplicación de Lean Office y Optimización de Recursos',
      descripcion: 'Eliminamos desperdicios administrativos y optimizamos flujos operativos aplicando principios Lean.',
      beneficios: [
        'Reducción de tiempos improductivos.',
        'Mayor control y orden en la gestión documental y operativa.',
        'Rentabilidad aumentada mediante el uso eficiente de recursos.'
      ],
      imagen: 'assets/subservicios/7_1-optimizacion.png'
    },
    {
      titulo: '7.2 Proyectos DMAIC y Análisis Six Sigma',
      descripcion: 'Aplicamos metodologías DMAIC y Six Sigma para reducir variabilidad y estandarizar procesos.',
      beneficios: [
        'Resolución sistemática de problemas.',
        'Procesos más estables, medibles y predecibles.',
        'Mejora de la calidad con métricas claras de seguimiento.'
      ],
      imagen: 'assets/subservicios/7_2-proyectos.png'
    },
    {
      titulo: '7.3 Capacitación y Eventos Kaizen',
      descripcion: 'Fomentamos la participación del personal en talleres Kaizen con resultados de mejora inmediata.',
      beneficios: [
        'Resultados tangibles en corto plazo.',
        'Mayor compromiso del personal con la mejora continua.',
        'Desarrollo de competencias estratégicas y operativas.'
      ],
      imagen: 'assets/subservicios/7_3-capacitacion.png'
    },
    {
      titulo: '7.4 Implementación de Herramientas Digitales para Gestión de Calidad',
      descripcion: 'Integramos plataformas digitales para el monitoreo en tiempo real de KPIs e indicadores de calidad.',
      beneficios: [
        'Acceso en tiempo real a KPIs clave.',
        'Visualización clara del desempeño de los procesos.',
        'Agilidad en la detección de desviaciones y en la implementación de ajustes.'
      ],
      imagen: 'assets/subservicios/7_4-herramientas.png'
    }
  ];
}

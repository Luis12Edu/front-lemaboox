import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  @ViewChild('carrusel') carrusel!: ElementRef;

  constructor(private router: Router) {}

  servicios = [
    {
      titulo: 'Gestión Estratégica de Procedimientos Administrativos',
      descripcion: 'Diseño, actualización y estandarización de procesos internos alineados a objetivos estratégicos.',
      ruta: 'gestion-procedimientos',
      imagen: 'gestion.webp'
    },
    {
      titulo: 'Automatización y Soluciones Digitales Integrales',
      descripcion: 'Transformamos tareas manuales en procesos digitales eficientes mediante tecnología accesible.',
      ruta: 'automatizacion-digital',
      imagen: 'automatizacion.webp'
    },
    {
      titulo: 'Gestión Integral Documental',
      descripcion: 'Convertimos la gestión documental en un activo estratégico con digitalización y control estructurado.',
      ruta: 'gestion-documental',
      imagen: 'documental.webp'
    },
    {
      titulo: 'Auditorías, Control de Calidad y Gestión de Riesgos',
      descripcion: 'Evaluamos y fortalecemos procesos mediante auditorías internas, control de calidad y mitigación de riesgos.',
      ruta: 'auditorias-riesgos',
      imagen: 'auditorias.webp'
    },
    {
      titulo: 'Análisis y Optimización de Puestos de Trabajo',
      descripcion: 'Optimizamos la estructura funcional, roles, cargas laborales y desarrollo del talento humano.',
      ruta: 'optimizacion-puestos',
      imagen: 'puestos.webp'
    },
    {
      titulo: 'Formación y Desarrollo Organizacional',
      descripcion: 'Programas de capacitación técnica, habilidades blandas y fortalecimiento del clima organizacional.',
      ruta: 'formacion-organizacional',
      imagen: 'formacion.webp'
    },
    {
      titulo: 'Gestión de Calidad y Mejora Continua',
      descripcion: 'Aplicamos Lean Office, Six Sigma y estrategias de mejora continua orientadas a resultados sostenibles.',
      ruta: 'mejora-continua',
      imagen: 'calidad.webp'
    },
    {
      titulo: 'Desarrollo de Programas y Aplicaciones',
      descripcion: 'Creamos soluciones digitales personalizadas: apps, tableros, herramientas interactivas y sistemas.',
      ruta: 'desarrollo-aplicaciones',
      imagen: 'aplicaciones.webp'
    },
    {
      titulo: 'Integración con ESG (Ambiental, Social y Gobernanza)',
      descripcion: 'Asesoramos en la implementación de principios ESG para fortalecer sostenibilidad y responsabilidad social.',
      ruta: 'esg-sostenibilidad',
      imagen: 'esg.webp'
    }
  ];

  scrollIzquierda() {
    const carrusel = document.querySelector('.carrusel');
    if (carrusel) carrusel.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollDerecha() {
    const carrusel = document.querySelector('.carrusel');
    if (carrusel) carrusel.scrollBy({ left: 300, behavior: 'smooth' });
  }


  explorarServicio(ruta: string) {
    this.router.navigate(['/servicios', ruta]);
  }
}

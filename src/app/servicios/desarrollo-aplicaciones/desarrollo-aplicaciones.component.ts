import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desarrollo-aplicaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desarrollo-aplicaciones.component.html',
  styleUrl: './desarrollo-aplicaciones.component.css'
})
export class DesarrolloAplicacionesComponent {

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
      titulo: '8.1 Desarrollo de Aplicaciones Web y Móviles',
      descripcion: 'Diseñamos apps responsivas para automatizar procesos y mejorar la gestión operativa.',
      beneficios: [
        'Mayor control y seguimiento de procesos.',
        'Acceso remoto seguro desde cualquier ubicación.',
        'Aumento de eficiencia y reducción de tareas manuales.'
      ],
      imagen: 'assets/subservicios/8_1-aplicaciones.png'
    },
    {
      titulo: '8.2 Creación de Herramientas Interactivas Personalizadas',
      descripcion: 'Desarrollamos generadores, tableros visuales o calendarios interactivos hechos a medida.',
      beneficios: [
        'Adaptación exacta a las necesidades del usuario.',
        'Interfaces intuitivas y fáciles de usar.',
        'Reducción de errores humanos y mejora en la presentación de información.'
      ],
      imagen: 'assets/subservicios/8_2-herramientas.png'
    },
    {
      titulo: '8.3 Integración de Funcionalidades con Bases de Datos',
      descripcion: 'Diseñamos bases de datos que se conectan con apps web o móviles para una gestión centralizada.',
      beneficios: [
        'Información centralizada y actualizada en tiempo real.',
        'Automatización de reportes y gráficas.',
        'Mejora en la toma de decisiones basada en datos.'
      ],
      imagen: 'assets/subservicios/8_3-funcionalidades.png'
    },
    {
      titulo: '8.4 Control de Usuarios y Roles',
      descripcion: 'Implementamos permisos diferenciados por tipo de usuario para proteger información y flujos.',
      beneficios: [
        'Seguridad y trazabilidad en la gestión digital.',
        'Personalización de vistas y acciones según perfil.',
        'Mayor control operativo.'
      ],
      imagen: 'assets/subservicios/8_4-control.png'
    }
  ];
}

import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-documental',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestion-documental.component.html',
  styleUrl: './gestion-documental.component.css'
})
export class GestionDocumentalComponent {

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
      titulo: '3.1 Organización y Digitalización de Documentos',
      descripcion: 'Diseñamos sistemas funcionales para clasificar y digitalizar documentos físicos y electrónicos.',
      beneficios: [
        'Acceso inmediato y seguro a la información.',
        'Reducción de espacio físico y costos de almacenamiento.',
        'Cumplimiento con normativas legales y fiscales.'
      ],
      imagen: 'assets/subservicios/3_1-organizacion.webp'
    },
    {
      titulo: '3.2 Desarrollo de Bases de Datos Documentales',
      descripcion: 'Creamos plataformas para organizar documentos por categorías, fechas, áreas o procesos.',
      beneficios: [
        'Información centralizada en un sistema único.',
        'Búsqueda eficiente mediante filtros y etiquetas.',
        'Integración con sistemas existentes (ERP, CRM, etc.).'
      ],
      imagen: 'assets/subservicios/3_2-desarrollo.webp'
    },
    {
      titulo: '3.3 Auditorías, Depuración y Actualización de Archivos',
      descripcion: 'Evaluamos archivos para eliminar duplicados, actualizar información y mejorar estructura.',
      beneficios: [
        'Optimización del espacio y estructura documental.',
        'Eliminación de información innecesaria o desactualizada.',
        'Mejora continua y trazabilidad en la gestión de archivos.'
      ],
      imagen: 'assets/subservicios/3_3-auditorias.webp'
    }
  ];
}

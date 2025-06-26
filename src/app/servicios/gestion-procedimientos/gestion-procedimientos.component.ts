
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gestion-procedimientos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestion-procedimientos.component.html',
  styleUrl: './gestion-procedimientos.component.css'
})
export class GestionProcedimientosComponent {
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

  subservicios = [
    {
      titulo: '1.1 Elaboración y Actualización de Políticas, Misión y Visión',
      descripcion: 'Diseñamos y actualizamos las directrices corporativas que refuerzan la identidad organizacional.',
      beneficios: [
        'Mejora la coherencia y eficacia en la toma de decisiones.',
        'Refuerza la cultura organizacional y el sentido de pertenencia.',
        'Facilita la comunicación interna y externa.'
      ],
      imagen: 'assets/subservicios/1_1-politicas.png',
      extra: 'Las organizaciones con políticas claras experimentan hasta un 30% menos conflictos internos y un 20% más retención de talento.'
    },
    {
      titulo: '1.2 Diseño, Documentación y Estandarización de Procedimientos',
      descripcion: 'Creamos procedimientos claros, funcionales y alineados a las normativas.',
      beneficios: [
        'Reducción de errores operativos.',
        'Mejora en la calidad del servicio.',
        'Agilidad en la capacitación e integración de nuevo personal.'
      ],
      imagen: 'assets/subservicios/1_2-procedimientos.png',
      extra: 'La documentación efectiva reduce en un 40% los tiempos de ejecución y mejora el cumplimiento normativo en un 25%.'
    },
    {
      titulo: '1.3 Mapeo Integral de Procesos y Detección de Ineficiencias',
      descripcion: 'Detectamos cuellos de botella y representamos visualmente los flujos de trabajo administrativos.',
      beneficios: [
        'Mayor comprensión de los procesos clave.',
        'Identificación de ineficiencias y mejoras inmediatas.',
        'Mejora de la coordinación interdepartamental y del tiempo de respuesta.'
      ],
      imagen: 'assets/subservicios/1_3-ineficiencias.png'
    }
  ];

}

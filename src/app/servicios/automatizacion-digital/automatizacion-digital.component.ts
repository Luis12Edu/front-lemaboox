import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-automatizacion-digital',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './automatizacion-digital.component.html',
  styleUrl: './automatizacion-digital.component.css'
})
export class AutomatizacionDigitalComponent {

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
      titulo: '2.1 Automatización de Procesos Administrativos',
      descripcion: 'Implementamos soluciones digitales con herramientas como Excel, Word, formularios PDF inteligentes y macros.',
      beneficios: [
        'Mayor velocidad y precisión en los procesos.',
        'Libera tiempo del personal para tareas estratégicas.',
        'Mejora continua a través del monitoreo automatizado.'
      ],
      imagen: 'assets/subservicios/2_1-automatización.png',
       extra: null  // ✅ Soluciona el error
    },
    {
      titulo: '2.2 Control de Versiones',
      descripcion: 'Aseguramos la integridad y seguimiento de documentos para evitar pérdida de información.',
      beneficios: [
        'Historial claro y seguro de cambios.',
        'Cumplimiento normativo garantizado.',
        'Mayor organización documental y trazabilidad.'
      ],
      imagen: 'assets/subservicios/2_2-versiones.png',
         extra: null  // ✅ Soluciona el error
    },
    {
      titulo: '2.3 Consolidación, Organización y Gestión Integral de Datos',
      descripcion: 'Unificamos y depuramos la información empresarial para facilitar el acceso y explotación de datos confiables.',
      beneficios: [
        'Acceso rápido a datos consolidados.',
        'Eliminación de duplicidades y redundancias.',
        'Mejora en la toma de decisiones basada en datos.'
      ],
      imagen: 'assets/subservicios/2_3-consolidación.png',
       extra: null  // ✅ Soluciona el error
    },
    {
      titulo: '2.4 Estandarización y Flujo de Información',
      descripcion: 'Diseñamos flujos de datos eficientes entre departamentos para mejorar la coordinación operativa.',
      beneficios: [
        'Mejora en la comunicación interna.',
        'Reducción de reprocesos y retrasos.',
        'Coordinación precisa entre áreas operativas.'
      ],
      imagen: 'assets/subservicios/2_4-estendarización.png',
       extra: null  // ✅ Soluciona el error
    },
    {
      titulo: '2.5 Creación de Formularios Digitales Personalizados',
      descripcion: 'Formularios adaptados a cada necesidad para una captura de información más eficiente y digital.',
      beneficios: [
        'Formularios alineados a necesidades específicas.',
        'Recolección de datos más precisa y eficiente.',
        'Integración con otras herramientas o bases de datos.'
      ],
      imagen: 'assets/subservicios/2_5-formularios.png',
       extra: null  // ✅ Soluciona el error
    }
  ];
}

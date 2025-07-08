import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-optimizacion-puestos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './optimizacion-puestos.component.html',
  styleUrl: './optimizacion-puestos.component.css'
})
export class OptimizacionPuestosComponent {

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
      titulo: '5.1 Evaluación de Tareas y Distribución de Cargas',
      descripcion: 'Analizamos tareas por puesto para detectar sobrecargas o funciones sin valor agregado.',
      beneficios: [
        'Equilibrio en la carga laboral y reducción del estrés.',
        'Aumento de la productividad y eficiencia individual.',
        'Eliminación de tareas duplicadas o innecesarias.'
      ],
      imagen: 'assets/subservicios/5_1-evaluacion.webp'
    },
    {
      titulo: '5.2 Diseño y Actualización de Perfiles de Puesto',
      descripcion: 'Definimos roles, responsabilidades y competencias clave para cada posición.',
      beneficios: [
        'Claridad en funciones y expectativas.',
        'Base sólida para procesos de reclutamiento y evaluación.',
        'Mejora en la alineación del talento con los objetivos del negocio.'
      ],
      imagen: 'assets/subservicios/5_2-perfiles.webp'
    },
    {
      titulo: '5.3 Diseño de Estructuras Organizacionales',
      descripcion: 'Desarrollamos organigramas funcionales y jerárquicos para mejorar la coordinación.',
      beneficios: [
        'Alineación de la estructura con la estrategia organizacional.',
        'Fluidez en la comunicación interna.',
        'Integración efectiva de nuevos colaboradores.'
      ],
      imagen: 'assets/subservicios/5_3-estructuras.webp'
    },
    {
      titulo: '5.4 Elaboración de Manuales de Funciones',
      descripcion: 'Documentamos funciones y responsabilidades de cada puesto para facilitar el desempeño.',
      beneficios: [
        'Estándares claros para la ejecución de tareas.',
        'Apoyo en la inducción y capacitación del personal.',
        'Evaluación objetiva del cumplimiento de funciones.'
      ],
      imagen: 'assets/subservicios/5_4-manuales.webp'
    },
    {
      titulo: '5.5 Evaluación del Desempeño',
      descripcion: 'Implementamos sistemas objetivos de medición del desempeño alineados a metas.',
      beneficios: [
        'Identificación de fortalezas y áreas de mejora.',
        'Toma de decisiones fundamentada para promociones o ajustes.',
        'Fomento del desarrollo profesional continuo.'
      ],
      imagen: 'assets/subservicios/5_5-desempeño.webp'
    },
    {
      titulo: '5.6 Estrategias de Crecimiento y Desarrollo',
      descripcion: 'Diseñamos planes personalizados para fortalecer la motivación y el desarrollo del personal.',
      beneficios: [
        'Incremento en la retención del talento.',
        'Cultura de aprendizaje y mejora continua.',
        'Trayectorias de desarrollo profesional claras.'
      ],
      imagen: 'assets/subservicios/5_6-estrategias.webp'
    },
    {
      titulo: '5.7 Toma de Tiempos Administrativos',
      descripcion: 'Medimos tiempos por actividad para detectar ineficiencias y reasignar tareas estratégicamente.',
      beneficios: [
        'Datos precisos sobre el uso del tiempo.',
        'Reducción de actividades improductivas.',
        'Reasignación inteligente de tareas según el valor generado.'
      ],
      imagen: 'assets/subservicios/5_7-tomaTiempos.webp'
    }
  ];
}

import { CommonModule } from '@angular/common';
import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  @ViewChild('carrusel', { static: false }) carrusel!: ElementRef;

scrollCarrusel(direccion: 'izq' | 'der') {
  const paso = this.carrusel.nativeElement.offsetWidth;
  this.carrusel.nativeElement.scrollBy({
    left: direccion === 'izq' ? -paso : paso,
    behavior: 'smooth'
  });
}

indice = 0;

servicios = [
    {
      nombre: 'Elaboración de Políticas, Misión, Visión y Valores',
      descripcion: 'Impulsa tu cultura y liderazgo al alinear misión, visión y políticas: fortalece tu identidad, motiva a tu equipo y destaca en el mercado.',
      icono: 'assets/subservicios/1_1-politicas.png'
    },
    {
      nombre: 'Diseño, Documentación y Estandarización de Procedimientos',
      descripcion: 'Optimiza operaciones con procedimientos claros y estandarizados: acelera la capacitación, reduce errores y multiplica la eficiencia de tu equipo.',
      icono: 'assets/subservicios/1_2-procedimientos.png'
    },
    {
      nombre: 'Mapeo Integral de Procesos y Detección de Ineficiencias',
      descripcion: 'Descubre fallos ocultos en tu flujo: visualizamos procesos, detectamos cuellos de botella y duplicidades, y eliminamos actividades sin valor.',
      icono: 'assets/subservicios/1_3-ineficiencias.png'
    },
    {
      nombre: 'Automatización de Procesos Administrativos',
      descripcion: 'Libera tiempo y elimina errores automatizando tareas administrativas con herramientas digitales (Excel, Word, formularios inteligentes y macros).',
      icono: 'assets/subservicios/2_1-automatización.png'
    },
    {
      nombre: 'Digitalización de Documentos',
      descripcion: 'Convierte tus archivos físicos y electrónicos en información organizada: digitaliza, clasifica y accede de manera segura y ágil.',
      icono: 'assets/subservicios/3_1-organizacion.png'
    },
    {
      nombre: 'Depuración y Actualización de Documentos',
      descripcion: 'Depura y actualiza archivos obsoletos, establece flujos de revisión y aprobación para garantizar documentación fiable.',
      icono: 'assets/subservicios/3_3-auditorias.png'
    },
    {
      nombre: 'Auditorías Integrales (Temáticas, Internas y Externas)',
      descripcion: 'Pon en marcha procesos con auditorías: detecta errores, diseña planes de mejora y prepárate para cualquier revisión externa.',
      icono: 'assets/subservicios/4_1-auditorias.png'
    },
    {
      nombre: 'Establecimiento de Indicadores Clave (KPI)',
      descripcion: 'Monitorea tus logros en tiempo real: define y evalúa KPI que impulsen decisiones basadas en datos, alineando equipo y estrategia.',
      icono: 'assets/subservicios/4_6-seguimiento.png'
    },
    {
      nombre: 'Evaluación Externa de Calidad de Servicio',
      descripcion: 'Escucha la voz del cliente: encuestas externas revelan su visión; implementa mejoras tangibles y eleva su fidelidad.',
      icono: 'assets/subservicios/4_7-evaluacion.png'
    },
    {
      nombre: 'Diseño y Actualización de Perfiles de Puesto',
      descripcion: 'Transforma cada puesto en un reto eficiente: define roles, responsabilidades y competencias para optimizar tu equipo.',
      icono: 'assets/subservicios/5_2-perfiles.png'
    },
    {
      nombre: 'Toma de Tiempos Administrativos',
      descripcion: 'Descubre dónde se pierde tu tiempo: mide el tiempo invertido y elimina ineficiencias mientras gestionas tareas clave.',
      icono: 'assets/subservicios/5_7-tomaTiempos.png'
    },
    {
      nombre: 'Servicio “Hablemos: Talk Me”',
      descripcion: 'Empodera tu voz en el trabajo: espacios seguros, confidenciales y terapéuticos que mejoran el bienestar y fortalecen la confianza organizacional.',
      icono: 'assets/subservicios/6_6-servicio.png'
    },
    {
      nombre: 'Desarrollo de Eventos Kaizen',
      descripcion: 'Impulsa la excelencia con talleres Kaizen y equipos enfocados en mejoras diarias; involucra a todos y siente el cambio desde el primer día.',
      icono: 'assets/subservicios/7_3-capacitacion.png'
    },
    {
      nombre: 'Desarrollo de Aplicaciones Web y Móviles',
      descripcion: 'Transforma tu forma de trabajar: apps web y móviles que digitalizan cualquier proceso administrativo con control total.',
      icono: 'assets/subservicios/8_1-aplicaciones.png'
    },
    {
      nombre: 'Estrategias para la Sostenibilidad Empresarial',
      descripcion: 'Impulsa un legado sostenible: integra ESG a tus procesos, reportes y decisiones para asegurar un impacto positivo.',
      icono: 'assets/subservicios/9_1-estrategias.png'
    },
    {
      nombre: 'Análisis del Clima Organizacional',
      descripcion: 'Descubre el pulso de tu equipo: mide su satisfacción, emociones y oportunidades y despierta su compromiso organizacional.',
      icono: 'assets/subservicios/6_5-analisis.png'
    }
  ];

  serviciosEnBloques: any[][] = [];

  ngOnInit() {
    this.serviciosEnBloques = this.dividirEnBloques(this.servicios, 8);
  }

  dividirEnBloques(lista: any[], tamaño: number): any[][] {
    const bloques = [];
    for (let i = 0; i < lista.length; i += tamaño) {
      bloques.push(lista.slice(i, i + tamaño));
    }
    return bloques;
  }

  avanzar() {
    if (this.indice + 8 < this.servicios.length) {
      this.indice += 8;
    }
  }

  retroceder() {
    if (this.indice >= 8) {
      this.indice -= 8;
    }
  }

  aplicaciones = [
  {
    titulo: 'Cuotas Escolares Claras',
    subtitulo: '¿Quieres gestionar las cuotas escolares con transparencia?',
    descripcion: 'Visualiza ingresos, gastos y estadísticas al instante. Sube recibos y evidencia de cada gasto. Envía propuestas y mejora tu escuela.',
    icono: 'assets/iconos/cuotas.png',
    ruta: '/cuotas'
  },
  {
    titulo: 'Administrador de Cotos y Condominios',
    subtitulo: '¿Quieres gestionar tu Coto o Condominio con total transparencia y claridad?',
    descripcion: 'Visualiza ingresos, gastos y mantenimientos. Mantén pagos, cuotas y estadísticas al día. Accede a reportes y documentos al instante.',
    icono: 'assets/iconos/cotos.png',
    ruta: '/cotos'
  },
  {
    titulo: 'Gestor de Archivos',
    subtitulo: '¿Quieres organizar tus documentos sin complicarte?',
    descripcion: 'Visualiza carpetas y archivos como en tu PC. Etiqueta, filtra y busca en tiempo real. Accede a estadísticas de uso y productividad.',
    icono: 'assets/iconos/gestor.png',
    ruta: '/gestor-archivos'
  },
  {
    titulo: 'Toma de Tiempos Administrativos',
    subtitulo: '¿Quieres optimizar tu tiempo al máximo y mejorar tu productividad?',
    descripcion: 'Registra tiempos y clasifícalos por actividad. Revisa tu historial y genera reportes. Revisa estadísticas de actividades más recurrentes.',
    icono: 'assets/iconos/tiempos.png',
    ruta: '/tiempos'
  },
  {
    titulo: 'Cotizaciones y Presupuestos',
    subtitulo: '¿Quieres controlar y agilizar tus cotizaciones y presupuestos como un profesional?',
    descripcion: 'Importa tu lista de precios y administra tus clientes. Genera y comparte presupuestos profesionales. Envía y da seguimiento a cada presupuesto.',
    icono: 'assets/iconos/cotizaciones.png',
    ruta: '/cotizaciones'
  },
  {
    titulo: 'Carátulas y Lomos de Carpetas',
    subtitulo: '¿Quieres diseñar carátulas y lomos de carpetas sin complicarte?',
    descripcion: 'Carga tu logo, el texto y personaliza tu carpeta. Previsualiza y exporta PDF listo para imprimir. Que tus carpetas luzcan profesionales.',
    icono: 'assets/iconos/caratulas.png',
    ruta: '/caratulas'
  },
  {
    titulo: 'Calendario Cumpleaños y Aniversarios',
    subtitulo: '¿Quieres mantener presentes las fechas importantes de tu equipo?',
    descripcion: 'Registra cumpleaños y aniversarios en segundos. Comparte calendarios sin complicaciones. Consulta estadísticas de celebraciones.',
    icono: 'assets/iconos/cumpleanos.png',
    ruta: '/cumpleanos'
  },
  {
    titulo: 'Hablemos: Talk Me',
    subtitulo: '¿Quieres conocer la opinión real de tu equipo de manera segura y confiable?',
    descripcion: 'Recoge feedback de tu equipo mediante encuestas confidenciales. Detecta áreas sensibles y fortalece la confianza organizacional.',
    icono: 'assets/iconos/talkme.png',
    ruta: '/talkme'
  }
];

}

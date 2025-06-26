import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CostosComponent } from './costos/costos.component';
import { AplicacionesComponent } from './aplicaciones/aplicaciones.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CuotasclarasComponent } from './cuotasclaras/cuotasclaras.component';
import { TiemposComponent } from './tiempos/tiempos.component';
import { CaratulasComponent } from './caratulas/caratulas.component';
import { CumpleanosComponent } from './cumpleanos/cumpleanos.component';
import { GestionProcedimientosComponent } from './servicios/gestion-procedimientos/gestion-procedimientos.component';
import { AutomatizacionDigitalComponent } from './servicios/automatizacion-digital/automatizacion-digital.component';
import { GestionDocumentalComponent } from './servicios/gestion-documental/gestion-documental.component';
import { AuditoriasRiesgosComponent } from './servicios/auditorias-riesgos/auditorias-riesgos.component';
import { OptimizacionPuestosComponent } from './servicios/optimizacion-puestos/optimizacion-puestos.component';
import { FormacionOrganizacionalComponent } from './servicios/formacion-organizacional/formacion-organizacional.component';
import { MejoraContinuaComponent } from './servicios/mejora-continua/mejora-continua.component';
import { EsgSostenibilidadComponent } from './servicios/esg-sostenibilidad/esg-sostenibilidad.component';
import { DesarrolloAplicacionesComponent } from './servicios/desarrollo-aplicaciones/desarrollo-aplicaciones.component';


export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'servicios/gestion-procedimientos', component: GestionProcedimientosComponent },
    { path: 'servicios/automatizacion-digital', component: AutomatizacionDigitalComponent },
    { path: 'servicios/gestion-documental', component: GestionDocumentalComponent },
    { path: 'servicios/auditorias-riesgos', component: AuditoriasRiesgosComponent },
    { path: 'servicios/optimizacion-puestos', component: OptimizacionPuestosComponent },
    { path: 'servicios/formacion-organizacional', component: FormacionOrganizacionalComponent },
    { path: 'servicios/mejora-continua', component: MejoraContinuaComponent },
    { path: 'servicios/desarrollo-aplicaciones', component: DesarrolloAplicacionesComponent },
    { path: 'servicios/esg-sostenibilidad', component: EsgSostenibilidadComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'costos', component: CostosComponent },
    { path: 'aplicaciones', component: AplicacionesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'cuotas', component: CuotasclarasComponent },
    { path: 'tiempos', component: TiemposComponent },
    { path: 'caratulas', component: CaratulasComponent },
    { path: 'cumpleanos', component: CumpleanosComponent },
];

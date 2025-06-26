import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  nombre = '';
  correo = '';
  contrasena = '';
  confirmarContrasena = '';
  mostrarContrasena = false;

  constructor(private router: Router) {}

  toggleMostrarContrasena() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  crearCuenta() {
    if (!this.nombre || !this.correo || !this.contrasena || !this.confirmarContrasena) {
      alert('⚠️ Por favor, completa todos los campos.');
      return;
    }

    if (this.contrasena !== this.confirmarContrasena) {
      alert('❌ Las contraseñas no coinciden.');
      return;
    }

    console.log('✅ Cuenta creada:', { nombre: this.nombre, correo: this.correo });
    alert('✅ Cuenta registrada correctamente.');
    this.router.navigate(['/login']);
  }
}

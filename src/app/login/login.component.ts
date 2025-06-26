import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  correo = '';
  contrasena = '';
  mostrarContrasena = false;

  constructor(private router: Router) {}

  toggleMostrarContrasena() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  iniciarSesion() {
    if (this.correo && this.contrasena) {
      // Simulamos el login guardando un token
      localStorage.setItem('lemaboox_token', 'token_falso');
      alert('✅ Acceso concedido');
      this.router.navigate(['/dashboard']);
    } else {
      alert('⚠️ Por favor, completa todos los campos.');
    }
  }
}

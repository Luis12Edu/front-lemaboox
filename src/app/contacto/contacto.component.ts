import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  nombre = '';
  correo = '';
  mensaje = '';
  mensajeExito = false;
  mensajeError = '';

  enviarFormulario() {
    if (this.nombre && this.correo && this.mensaje) {
      const datos = new FormData();
      datos.append('nombre', this.nombre);
      datos.append('correo', this.correo);
      datos.append('mensaje', this.mensaje);

      fetch('https://lemaboox.com/enviar-mensaje.php', {
        method: 'POST',
        body: datos
      })
      .then(res => res.text())
      .then(resultado => {
        if (resultado.trim() === 'ok') {
          this.mensajeExito = true;
          this.mensajeError = '';
          setTimeout(() => this.mensajeExito = false, 4000);
          this.nombre = '';
          this.correo = '';
          this.mensaje = '';
        } else {
          this.mostrarError('⚠️ Error: ' + resultado);
        }
      })
      .catch(err => {
        this.mostrarError('❌ Error de conexión.');
        console.error(err);
      });
    } else {
      this.mostrarError('⚠️ Por favor, completa todos los campos.');
    }
  }

  mostrarError(mensaje: string) {
    this.mensajeError = mensaje;
    setTimeout(() => this.mensajeError = '', 4000);
  }


}

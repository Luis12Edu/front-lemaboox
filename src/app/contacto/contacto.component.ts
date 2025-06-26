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
        alert('✅ Mensaje enviado correctamente.');
        this.nombre = '';
        this.correo = '';
        this.mensaje = '';
      } else {
        alert('⚠️ Error: ' + resultado);
      }
    })
    .catch(err => {
      alert('❌ Error de conexión.');
      console.error(err);
    });
  } else {
    alert('⚠️ Por favor, completa todos los campos.');
  }
}

}

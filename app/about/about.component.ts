import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  diferencias = [
    {
      icon: '🏆',
      title: 'Calidad garantizada',
      desc: 'Cada litro pasa por un riguroso proceso de purificación y control antes de llegar a tus manos.'
    },
    {
      icon: '🛡️',
      title: 'Seguridad en cada paso',
      desc: 'Nuestros procesos y envases cumplen con los más altos estándares de higiene del sector.'
    },
    {
      icon: '🚚',
      title: 'Servicio confiable y puntual',
      desc: 'Llegamos a tu hogar o negocio justo cuando lo necesitas, sin demoras ni excusas.'
    }
  ];
}

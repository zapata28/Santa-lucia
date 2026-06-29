import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent {
  activeIndex = 0;

  departments = [
    {
      name: 'Boyacá',
      icon: '🏔️',
      description: 'Nuestra zona de mayor cobertura con entregas puntuales.',
      towns: ['Villa de Leyva', 'Sáchica', 'Samacá', 'Cucaita', 'Ráquira', 'Paipa', 'Tuta', 'Tibaná', 'Ramiriquí', 'Ciénega', 'Cómbita', 'Saboyá'],
      whatsapp: 'https://wa.me/573123149269'
    },
    {
      name: 'Cundinamarca',
      icon: '🌿',
      description: 'Cobertura en municipios clave con despacho al siguiente día hábil.',
      towns: ['Chiquinquirá', 'Guachetá', 'Chocontá', 'Garavito'],
      whatsapp: 'https://wa.me/573123149269'
    },
    {
      name: 'Santander',
      icon: '🌄',
      description: 'Presencia en Santander con entregas programadas según pedido.',
      towns: ['Vélez', 'Jenesano'],
      whatsapp: 'https://wa.me/573123149269'
    }
  ];
}

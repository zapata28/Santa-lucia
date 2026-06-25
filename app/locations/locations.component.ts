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
  departments = [
    {
      name: 'Boyacá',
      icon: '🏔️',
      towns: ['Villa de Leyva', 'Sáchica', 'Samacá', 'Cucaita', 'Ráquira', 'Paipa', 'Tuta', 'Tibaná', 'Ramiriquí', 'Ciénega', 'Cómbita', 'Saboyá']
    },
    {
      name: 'Cundinamarca',
      icon: '🌿',
      towns: ['Chiquinquirá', 'Guachetá', 'Chocontá', 'Garavito']
    },
    {
      name: 'Santander',
      icon: '🌄',
      towns: ['Vélez', 'Jenesano']
    }
  ];

  contacts = [
    { label: 'Sede principal', value: '+57 316 456 7890', href: 'https://wa.me/57316456789' },
    { label: 'WhatsApp pedidos', value: '+57 310 234 5678', href: 'https://wa.me/57310234567' },
    { label: 'Teléfono fijo', value: '(7) 678 9012', href: 'tel:+5776789012' }
  ];
}

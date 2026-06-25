import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products = [
    {
      icon: '🫙',
      name: 'Botellón 20L',
      desc: 'El clásico para el hogar y la oficina. Retornable, económico y de fácil manejo. Compatible con todos los dispensadores del mercado. Ideal para familias y espacios de trabajo.',
      features: ['Retornable', 'Para dispensador', 'Hogar y oficina'],
      tag: 'Más vendido'
    },
    {
      icon: '💧',
      name: 'Botella 600ml',
      desc: 'Perfecta para llevar a donde vayas. Agua purificada de fuente natural en formato individual, ideal para el trabajo, el estudio, el deporte y los viajes.',
      features: ['Formato individual', 'Fácil de llevar', 'Actividad física'],
      tag: 'Personal'
    }
  ];
}

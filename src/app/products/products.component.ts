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
      desc: 'El clásico para el hogar y oficina. Retornable, económico y de fácil manejo. Ideal para dispensadores y neveras.',
      price: 'Desde $8.500',
      tag: 'Más vendido'
    },
    {
      icon: '💧',
      name: 'Botella 600ml',
      desc: 'Perfecta para llevar. Agua purificada de manantial en formato individual, ideal para actividad física y trabajo.',
      price: 'Desde $1.500',
      tag: 'Personal'
    },
    {
      icon: '🧊',
      name: 'Botella 1.5L',
      desc: 'El tamaño familiar para la mesa del hogar. Agua cristalina con el sello de calidad Santa Lucía que toda la familia disfruta.',
      price: 'Desde $3.200',
      tag: 'Familiar'
    },
    {
      icon: '🏢',
      name: 'Plan Empresarial',
      desc: 'Suministro continuo para empresas, restaurantes y hoteles. Incluye dispensador en comodato y servicio prioritario.',
      price: 'A convenir',
      tag: 'Empresas'
    },
    {
      icon: '📦',
      name: 'Pack 6x1.5L',
      desc: 'El paquete económico para nunca quedarse sin agua. Seis unidades con el precio más conveniente del mercado.',
      price: 'Desde $16.000',
      tag: 'Ahorro'
    },
    {
      icon: '🚐',
      name: 'Delivery Mensual',
      desc: 'Suscripción mensual con descuento especial. Recibe tu agua automáticamente sin preocupaciones ni llamadas.',
      price: 'Plan desde $75.000',
      tag: 'Suscripción'
    }
  ];
}

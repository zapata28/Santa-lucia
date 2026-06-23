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
  locations = [
    {
      city: 'Barbosa',
      address: 'Cra. 8 #12-45, Barrio Centro',
      phone: '+57 316 456 7890',
      hours: 'Lun–Sáb 7am–6pm',
      email: 'barbosa@santalucia.com.co',
      flagship: true
    },
    {
      city: 'Bucaramanga',
      address: 'Cll. 45 #28-30, Cabecera del Llano',
      phone: '+57 310 234 5678',
      hours: 'Lun–Sáb 8am–7pm',
      email: 'bga@santalucia.com.co',
      flagship: false
    },
    {
      city: 'Girón',
      address: 'Cra. 14 #7-22, Barrio La Paz',
      phone: '+57 317 890 1234',
      hours: 'Lun–Sáb 7am–5pm',
      email: 'giron@santalucia.com.co',
      flagship: false
    },
    {
      city: 'Floridablanca',
      address: 'Av. González Valencia #52-10',
      phone: '+57 314 567 8901',
      hours: 'Lun–Sáb 8am–6pm',
      email: 'florida@santalucia.com.co',
      flagship: false
    },
    {
      city: 'Lebrija',
      address: 'Cll. 5 #3-18, Parque Principal',
      phone: '+57 318 012 3456',
      hours: 'Lun–Vie 8am–5pm',
      email: 'lebrija@santalucia.com.co',
      flagship: false
    }
  ];

  activeLocation = 0;
}

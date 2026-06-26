import { Component, OnDestroy, AfterViewInit, OnChanges, Input, SimpleChanges, ViewChild, ElementRef, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';

const DEPT_COORDS: Record<string, [number, number][]> = {
  'Boyacá': [
    [5.6338, -73.5253], // Villa de Leyva
    [5.5500, -73.4900], // Sáchica
    [5.4897, -73.4956], // Samacá
    [5.4667, -73.5167], // Cucaita
    [5.5392, -73.6319], // Ráquira
    [5.7833, -73.1167], // Paipa
    [5.6833, -73.2000], // Tuta
    [5.3167, -73.4000], // Tibaná
    [5.4000, -73.3333], // Ramiriquí
    [5.4167, -73.1833], // Ciénega
    [5.6167, -73.3167], // Cómbita
    [5.7000, -73.7833], // Saboyá
  ],
  'Cundinamarca': [
    [5.6167, -73.8167], // Chiquinquirá
    [5.3500, -73.6833], // Guachetá
    [5.1500, -73.6833], // Chocontá
    [4.9167, -74.3333], // Garavito
  ],
  'Santander': [
    [6.0108, -73.6775], // Vélez
    [5.4167, -73.3500], // Jenesano
  ]
};

const TOWN_NAMES: Record<string, string[]> = {
  'Boyacá': ['Villa de Leyva', 'Sáchica', 'Samacá', 'Cucaita', 'Ráquira', 'Paipa', 'Tuta', 'Tibaná', 'Ramiriquí', 'Ciénega', 'Cómbita', 'Saboyá'],
  'Cundinamarca': ['Chiquinquirá', 'Guachetá', 'Chocontá', 'Garavito'],
  'Santander': ['Vélez', 'Jenesano']
};

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapContainer') mapContainer!: ElementRef;

  activeIndex = 0;
  private map?: L.Map;
  private markers: L.Marker[] = [];

  departments = [
    {
      name: 'Boyacá',
      icon: '🏔️',
      description: 'Nuestra zona de mayor cobertura. Llegamos a 12 municipios del departamento con entregas puntuales.',
      towns: TOWN_NAMES['Boyacá'],
      phone: '+57 316 456 7890',
      whatsapp: 'https://wa.me/57316456789'
    },
    {
      name: 'Cundinamarca',
      icon: '🌿',
      description: 'Cobertura en municipios clave del departamento con despacho al siguiente día hábil.',
      towns: TOWN_NAMES['Cundinamarca'],
      phone: '+57 310 234 5678',
      whatsapp: 'https://wa.me/57310234567'
    },
    {
      name: 'Santander',
      icon: '🌄',
      description: 'Presencia en Santander con entregas programadas según pedido.',
      towns: TOWN_NAMES['Santander'],
      phone: '+57 310 234 5678',
      whatsapp: 'https://wa.me/57310234567'
    }
  ];

  ngAfterViewInit() {
    setTimeout(() => this.initMap(), 100);
  }

  ngOnDestroy() {
    this.map?.remove();
  }

  selectDept(index: number) {
    this.activeIndex = index;
    this.updateMarkers();
  }

  private initMap() {
    this.map = L.map(this.mapContainer.nativeElement, {
      center: [5.5, -73.5],
      zoom: 7,
      zoomControl: true,
      scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    this.updateMarkers();
  }

  private updateMarkers() {
    if (!this.map) return;

    this.markers.forEach(m => m.remove());
    this.markers = [];

    const deptName = this.departments[this.activeIndex].name;
    const coords = DEPT_COORDS[deptName];
    const names = TOWN_NAMES[deptName];

    const icon = L.divIcon({
      className: '',
      html: `<div style="
        background: #0D1F6E;
        border: 3px solid #F5C518;
        width: 14px; height: 14px;
        border-radius: 50%;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      "></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });

    coords.forEach(([lat, lng], i) => {
      const marker = L.marker([lat, lng], { icon })
        .bindPopup(`<strong style="color:#0D1F6E">${names[i]}</strong><br><small>Agua Santa Lucía</small>`)
        .addTo(this.map!);
      this.markers.push(marker);
    });

    const bounds = L.latLngBounds(coords.map(c => L.latLng(c[0], c[1])));
    this.map.fitBounds(bounds, { padding: [40, 40] });
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  tag: string;
  title: string;
  subtitle: string;
  cta: string;
  bg: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit, OnDestroy {
  current = 0;
  private timer: any;

  slides: Slide[] = [
    {
      tag: 'Pureza Natural',
      title: 'Agua Cristalina\nDe Manantial',
      subtitle: 'Proveniente de fuentes naturales de los Andes colombianos, purificada con tecnología de última generación para tu bienestar.',
      cta: 'Ver Productos',
      bg: 'slide1'
    },
    {
      tag: 'Entrega a Domicilio',
      title: 'Tu Agua\nA Tu Puerta',
      subtitle: 'Servicio de entrega confiable en toda la región. Pedidos desde 19 litros hasta distribución empresarial sin costo adicional.',
      cta: 'Solicitar Entrega',
      bg: 'slide2'
    },
    {
      tag: 'Calidad Certificada',
      title: 'Certificados\nY Garantizados',
      subtitle: 'Agua tratada bajo las más estrictas normas INVIMA con control de calidad en cada proceso, desde el manantial hasta tu hogar.',
      cta: 'Conocer Más',
      bg: 'slide3'
    }
  ];

  ngOnInit() { this.startTimer(); }
  ngOnDestroy() { clearInterval(this.timer); }

  startTimer() {
    this.timer = setInterval(() => this.next(), 5500);
  }

  next() { this.current = (this.current + 1) % this.slides.length; }
  prev() { this.current = (this.current - 1 + this.slides.length) % this.slides.length; }
  goTo(i: number) { this.current = i; clearInterval(this.timer); this.startTimer(); }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  tag: string;
  title: string;
  subtitle: string;
  cta: string;
  bg: string;
  img: string;
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
      subtitle: 'Proveniente de fuentes naturales, purificada con tecnología de última generación para tu bienestar.',
      cta: 'Ver Productos',
      bg: 'slide1',
      img: 'assets/slide1.jpeg'
    },
    {
      tag: 'Nuestros Productos',
      title: 'Botella 600ml\nPara Llevar',
      subtitle: 'Agua pura en formato individual, perfecta para el trabajo, el deporte y los viajes.',
      cta: 'Ver Productos',
      bg: 'slide2',
      img: 'assets/slide2.jpeg'
    },
    {
      tag: 'Entrega a Domicilio',
      title: 'Tu Agua\nA Tu Puerta',
      subtitle: 'Servicio de entrega confiable en toda la región. Llegamos el mismo día a tu hogar o negocio.',
      cta: 'Solicitar Entrega',
      bg: 'slide3',
      img: 'assets/slide3.jpeg'
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

import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { LocationsComponent } from './locations/locations.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, CarouselComponent, AboutComponent, ProductsComponent, LocationsComponent, ContactComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-carousel></app-carousel>
      <app-about></app-about>
      <app-products></app-products>
      <app-locations></app-locations>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`main { overflow: hidden; }`]
})
export class AppComponent {}

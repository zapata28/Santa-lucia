import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="logo">💧 <span>Santa Lucía</span></div>
          <p>Agua pura de manantial para el Área Metropolitana de Bucaramanga. Calidad, frescura y confianza desde hace más de 15 años.</p>
        </div>
        <div class="footer-links">
          <h4>Productos</h4>
          <ul>
            <li>Botellón 20L</li>
            <li>Botella 600ml</li>
            <li>Botella 1.5L</li>
            <li>Plan Empresarial</li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Ubicaciones</h4>
          <ul>
            <li>Barbosa (Sede Principal)</li>
            <li>Bucaramanga</li>
            <li>Girón</li>
            <li>Floridablanca</li>
            <li>Lebrija</li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Contacto</h4>
          <ul>
            <li>+57 316 456 7890</li>
            <li>+57 310 234 5678</li>
            <li>info&#64;santalucia.com.co</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© {{ year }} Agua Santa Lucía. Todos los derechos reservados.</span>
        <span>Certificado INVIMA · Hecho en Colombia 🇨🇴</span>
      </div>
    </footer>
  `,
  styles: [`
    footer { background: #061828; color: rgba(255,255,255,0.7); font-size: 0.9rem; }
    .footer-inner {
      max-width: 1200px; margin: 0 auto; padding: 3.5rem 1.5rem;
      display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem;
    }
    .footer-brand .logo {
      font-family: 'Playfair Display', serif; font-size: 1.3rem;
      color: white; margin-bottom: 1rem;
    }
    .footer-brand .logo span { font-weight: 700; }
    .footer-brand p { line-height: 1.7; max-width: 280px; }
    .footer-links h4 {
      color: white; font-family: 'Inter', sans-serif;
      font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em;
      text-transform: uppercase; margin-bottom: 1rem;
    }
    .footer-links ul { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.08);
      max-width: 1200px; margin: 0 auto; padding: 1.25rem 1.5rem;
      display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;
      font-size: 0.8rem;
    }
    @media (max-width: 768px) {
      .footer-inner { grid-template-columns: 1fr 1fr; gap: 2rem; }
      .footer-brand { grid-column: 1/-1; }
      .footer-bottom { flex-direction: column; text-align: center; }
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}

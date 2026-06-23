import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form = {
    name: '',
    phone: '',
    city: '',
    product: '',
    message: ''
  };

  sent = false;

  contacts = [
    { label: 'WhatsApp Principal', value: '+57 316 456 7890', href: 'https://wa.me/57316456789', icon: 'whatsapp' },
    { label: 'WhatsApp Bucaramanga', value: '+57 310 234 5678', href: 'https://wa.me/57310234567', icon: 'whatsapp' },
    { label: 'Teléfono Fijo', value: '(7) 678 9012', href: 'tel:+5776789012', icon: 'phone' },
    { label: 'Correo General', value: 'info@santalucia.com.co', href: 'mailto:info@santalucia.com.co', icon: 'mail' }
  ];

  submit() {
    if (this.form.name && this.form.phone && this.form.city) {
      this.sent = true;
    }
  }
}

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
  { label: 'WhatsApp Principal', value: '+57 316 456 7890', href: 'https://wa.me/57316456789', icon: 'whatsapp' }
  ];

  submit() {
    if (this.form.name && this.form.phone && this.form.city) {
      this.sent = true;
    }
  }
}

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
    product: ''
  };

  sent = false;

  contacts = [
  { label: 'WhatsApp Principal', value: '+57 312 314 9269', href: 'https://wa.me/573123149269', icon: 'whatsapp' }
  ];

  submit() {
    if (this.form.name && this.form.phone) {
      this.sent = true;
    }
  }
}

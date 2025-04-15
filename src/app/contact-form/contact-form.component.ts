import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from '../shared/types/Contact';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactForm {
  @Input() contact!: Contact;
  @Output() submitForm = new EventEmitter<void>();

  submit() {
    this.submitForm.emit();
  }
}

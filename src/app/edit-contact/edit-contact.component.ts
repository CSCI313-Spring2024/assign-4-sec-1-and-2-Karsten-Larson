import { Component, inject, Input, OnInit } from '@angular/core';
import { Contact } from '../shared/types/Contact';
import { ContactService as ContactService } from '../contact.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactForm } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-edit-contact',
  imports: [FormsModule, ContactForm],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css',
})
export class EditContactComponent implements OnInit {
  @Input({ required: true }) id!: string;

  contact!: Contact;

  contactService = inject(ContactService);
  router = inject(Router);

  ngOnInit(): void {
    console.log(this.contactService.getContactById(this.id));

    const contact = this.contactService.getContactById(this.id);

    if (!contact) {
      this.router.navigate(['/']);
      throw new Error(`Contact with id ${this.id} not found`);
    }

    this.contact = contact.clone();
  }

  saveContact(): void {
    this.contactService.updateContact(this.contact.id, this.contact);

    this.router.navigate(['/']);
  }
}

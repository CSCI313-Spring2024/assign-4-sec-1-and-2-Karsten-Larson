import { Component, inject, Input, OnInit } from '@angular/core';
import { Contact } from '../shared/types/Contact';
import { ContactService as ContactService } from '../contact.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactForm } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-add-contact',
  imports: [FormsModule, ContactForm],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css',
})
export class AddContactComponent implements OnInit {
  @Input({ required: true }) id!: string;

  contact!: Contact;

  contactService = inject(ContactService);
  router = inject(Router);

  ngOnInit(): void {
    this.contact = new Contact();
  }

  saveContact(): void {
    this.contactService.addContact(this.contact);

    this.router.navigate(['/']);
  }
}

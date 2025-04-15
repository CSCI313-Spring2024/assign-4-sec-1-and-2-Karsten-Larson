import { Component, inject, Input, OnInit } from '@angular/core';
import { Contact } from '../shared/types/Contact';
import { Router, RouterLink } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-card',
  imports: [RouterLink],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css',
})
export class ContactCardComponent implements OnInit {
  @Input({ required: true }) id!: string;
  @Input() showLink: boolean = false;

  contact!: Contact;

  contactService = inject(ContactService);
  routerService = inject(Router);

  ngOnInit(): void {
    const contact = this.contactService.getContactById(this.id);

    if (!contact) {
      this.routerService.navigate(['/']);
      throw new Error(`Contact with id ${this.id} not found`);
    }

    this.contact = contact;
  }

  deleteContact(): void {
    this.contactService.removeContact(this.id);
    this.routerService.navigate(['/']);
  }
}

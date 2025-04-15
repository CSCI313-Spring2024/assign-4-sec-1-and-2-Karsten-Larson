import {
  Component,
  computed,
  inject,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../shared/types/Contact';
import { ContactCardComponent } from '../contact-card/contact-card.component';

@Component({
  selector: 'app-contact-list',
  imports: [ContactCardComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent implements OnInit {
  contactService = inject(ContactService);
  contacts: Signal<Contact[]> = signal([]);

  ngOnInit(): void {
    this.contacts = computed(() => {
      let contacts = this.contactService.contacts();

      contacts.sort((a, b) => {
        const nameA =
          a.firstName.toLowerCase() + ' ' + a.lastName.toLowerCase();
        const nameB =
          b.firstName.toLowerCase() + ' ' + b.lastName.toLowerCase();
        return nameA.localeCompare(nameB);
      });

      return contacts;
    });
  }
}

import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { Contact } from './shared/types/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts: WritableSignal<Contact[]> = signal([]);

  constructor() {
    this.contacts.set([
      new Contact('John', 'Pork', '123-456-7890', 'john.pork@example.com'),
      new Contact('Jane', 'Smith', '987-654-3210', 'jane.smith@example.com'),
      new Contact(
        'Alice',
        'Johnson',
        '555-123-4567',
        'alice.johnson@example.com'
      ),
      new Contact('Bob', 'Brown', '444-987-6543', 'bob.brown@example.com'),
    ]);
  }

  addContact(newContact: Contact): void {
    this.contacts.update((contacts) => {
      contacts.push(newContact);
      return contacts;
    });
  }

  removeContact(id: string): void {
    const index = this.contacts().findIndex((contact) => contact.id === id);
    if (index === -1) {
      throw new Error(`Contact with id ${id} not found`);
    }
    this.contacts.update((contacts) => {
      contacts.splice(index, 1);
      return contacts;
    });
  }

  updateContact(old_id: string, updatedContact: Contact): void {
    this.removeContact(old_id);
    this.addContact(updatedContact);
  }

  getContactById(id: string): Contact | undefined {
    return this.contacts().find((contact) => contact.id === id);
  }
}

import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';

export const routes: Routes = [
  {
    path: '',
    component: ContactListComponent,
  },
  {
    path: 'contact/:id',
    component: ContactCardComponent,
  },
  {
    path: 'edit/:id',
    component: EditContactComponent,
  },
  {
    path: 'add',
    component: AddContactComponent,
  },
];

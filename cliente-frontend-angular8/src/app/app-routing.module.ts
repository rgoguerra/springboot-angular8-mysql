import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoListComponent } from './contacto-list/contacto-list/contacto-list.component';
import { CreateContactoComponent } from './contacto-create/create-contacto/create-contacto.component';
import { UpdateContactoComponent } from './contacto-update/update-contacto.component';
import { DetailsContactoComponent } from './contacto-details/details-contacto/details-contacto.component';


const routes: Routes = [
  { path: '', redirectTo: 'contacto', pathMatch: 'full' },
  { path: 'contactos', component: ContactoListComponent },
  { path: 'add', component: CreateContactoComponent },
  { path: 'update/:id', component: UpdateContactoComponent },
  { path: 'details/:id', component: DetailsContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

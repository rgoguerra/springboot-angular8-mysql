import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateContactoComponent } from './contacto-create/create-contacto/create-contacto.component';
import { UpdateContactoComponent } from './contacto-update/update-contacto.component';
import { ContactoListComponent } from './contacto-list/contacto-list/contacto-list.component';
import { DetailsContactoComponent } from './contacto-details/details-contacto/details-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateContactoComponent,
    UpdateContactoComponent,
    ContactoListComponent,
    DetailsContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

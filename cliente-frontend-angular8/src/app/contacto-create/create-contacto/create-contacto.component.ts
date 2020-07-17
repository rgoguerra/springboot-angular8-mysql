import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contacto } from '../../contacto';
import { ContactoService } from './../../services/contacto.service';

@Component({
  selector: 'app-create-contacto',
  templateUrl: './create-contacto.component.html',
  styleUrls: ['./create-contacto.component.css']
})
export class CreateContactoComponent implements OnInit {

  contacto: Contacto = new Contacto();
  submitted = false;

  constructor(private contactoService: ContactoService, private router: Router) { }

  ngOnInit() {
  }

  newContacto(): void {
    this.submitted = false;
    this.contacto = new Contacto();
  }

  save() {
    this.contactoService.createContacto(this.contacto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.contacto = new Contacto();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/contactos']);
  }

}

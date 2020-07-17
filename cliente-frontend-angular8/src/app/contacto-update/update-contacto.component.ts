import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contacto } from '../contacto';
import { ContactoService } from './../services/contacto.service';

@Component({
  selector: 'app-update-contacto',
  templateUrl: './update-contacto.component.html',
  styleUrls: ['./update-contacto.component.css']
})
export class UpdateContactoComponent implements OnInit {

  id: number;
  contacto: Contacto = new Contacto();
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.contacto = new Contacto();

    this.id = this.route.snapshot.params['id'];

    this.contactoService.getContacto(this.id)
      .subscribe(data => {
        console.log(data);
        this.contacto = data;
      }, error => console.log(error));

  }

  updateEmployee() {
    this.submitted = false;
    this.contactoService.updateContacto(this.id, this.contacto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.contacto = new Contacto();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['contactos']);
  }


}

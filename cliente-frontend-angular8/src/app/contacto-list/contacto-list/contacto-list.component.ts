import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from "rxjs";

import { Contacto } from '../../contacto';
import { ContactoService } from './../../services/contacto.service';

@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html',
  styleUrls: ['./contacto-list.component.css']
})

export class ContactoListComponent implements OnInit {

  contactos: Observable<Contacto[]>;

  constructor(private contactoService: ContactoService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }


  reloadData() {
    this.contactos = this.contactoService.getContactosList();
  }

  deleteContacto(id: number) {
    this.contactoService.deleteContacto(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  contactoDetails(id: number){
    this.router.navigate(['details', id]);
  }


}

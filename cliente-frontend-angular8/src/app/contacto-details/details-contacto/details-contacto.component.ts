
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Contacto } from '../../contacto';
import { ContactoService } from './../../services/contacto.service';


@Component({
  selector: 'app-details-contacto',
  templateUrl: './details-contacto.component.html',
  styleUrls: ['./details-contacto.component.css']
})
export class DetailsContactoComponent implements OnInit {

  id: number;
  contacto: Contacto = new Contacto();

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

  list(){
    this.router.navigate(['contactos']);
  }

}

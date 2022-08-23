import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  faInstagram = faInstagram;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  mensajeForm: FormGroup;

  constructor(formBuilder: FormBuilder) {    
    this.mensajeForm = formBuilder.group({
      nombre: "",
      email: "",
      mensaje:"",
      telefono:""
  })
   }

  ngOnInit(): void {
  }

  mensaje() {
    this.mensajeForm.reset();
    console.log(this.mensajeForm)
}

}
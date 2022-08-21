import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faInstagram = faInstagram;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faChevronCircleUp = faChevronCircleUp;

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(seccion: string) {
    window.location.hash = '';
    window.location.hash = seccion;   
  }

}

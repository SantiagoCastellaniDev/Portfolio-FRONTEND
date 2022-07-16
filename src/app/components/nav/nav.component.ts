import { Component, OnInit } from '@angular/core';


import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  faInstagram = faInstagram;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}

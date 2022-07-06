import { Component, OnInit } from '@angular/core';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  faHtml5 = faHtml5;
  faCss3Alt = faCss3Alt;
  faJs = faJs;
  faBootstrap = faBootstrap;
  faAngular = faAngular;
  faJava = faJava;
  faDatabase = faDatabase;
  faPowerOff = faPowerOff;


  constructor() { }

  ngOnInit(): void {
  }

}

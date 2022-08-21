import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faSplotch } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  faBars = faBars;
  faHome = faHome;
  faSeedling = faSeedling;
  faSplotch = faSplotch;
  faLaptopCode = faLaptopCode;
  faBookOpen = faBookOpen;
  faCube = faCube;
  faCommentAlt = faCommentAlt;

  constructor() { }

  ngOnInit(): void {
  }

  /*------NAVEGAR A SECCION------*/
  scrollTo(seccion: string) {
    window.location.hash = '';
    window.location.hash = seccion;   
  }

}

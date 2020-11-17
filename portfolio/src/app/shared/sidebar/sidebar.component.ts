import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

 navItems = [
    {
      icon: "fa-home",
      route: "home",
      label: "Home"
    },
    {
      icon: "fa-user",
      route: "about",
      label: "About"
    },
    {
      icon: "fa-file-code-o",
      route: "projects",
      label: "Projects"
    },
    {
      icon: "fa-book",
      route: "certificates",
      label: "Certificates"
    },
    {
      icon: "fa-picture-o",
      route: "pictures",
      label: "Pictures"
    }
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}

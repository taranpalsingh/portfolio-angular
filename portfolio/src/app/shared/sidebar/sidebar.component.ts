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
      label: "Home"
    },
    {
      icon: "fa-user",
      label: "About"
    },
    {
      icon: "fa-file-code-o",
      label: "Projects"
    },
    {
      icon: "fa-book",
      label: "Writings"
    },
    {
      icon: "fa-picture-o",
      label: "Pictures"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

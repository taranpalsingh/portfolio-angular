import { Component, OnInit } from '@angular/core';
import { Constants } from '../menu.constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constants = Constants;
  navItems = this.constants.navItems;

  constructor() { }

  ngOnInit(): void {
  }

}

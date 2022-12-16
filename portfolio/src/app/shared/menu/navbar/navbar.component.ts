import { Component, OnInit } from '@angular/core';
import { Constants } from '../menu.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constants = Constants;
  navItems = this.constants.navItems;

  constructor() { }

  ngOnInit(): void {
  }

}

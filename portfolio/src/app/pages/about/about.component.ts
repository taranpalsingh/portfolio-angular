import { Component, OnInit } from '@angular/core';
import { Constants } from './about.constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constants = Constants;
  features = Constants.features;

  constructor() { }

  ngOnInit(): void {
  }

}

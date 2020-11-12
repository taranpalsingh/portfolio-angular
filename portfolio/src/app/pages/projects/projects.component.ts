import { Component, OnInit } from '@angular/core';
import { Constants } from './projects.constants';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  constants = Constants;
  projects = Constants.projects;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Constants } from './projects.constants';
import { ProjectModel } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  constants = Constants;
  projects: Array<ProjectModel> = Constants.projects;
  
  constructor() { }

  ngOnInit(): void {
  }

}

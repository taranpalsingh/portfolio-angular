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
  projects: Array<ProjectModel> = [];
  
  constructor() { }

  ngOnInit(): void {
    let i = 0;
    for (const project of Constants.projects) {
      i++;
      setTimeout(() => {
        this.projects.push(project);
      }, i*200);
    }
  }
}

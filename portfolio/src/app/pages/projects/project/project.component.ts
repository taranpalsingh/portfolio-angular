import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input() project;
  
  constructor(
    public dialog: MatDialog,
    public appService: AppService,
  ) {}

  openDialog(): void {

    let width = '40vw';
    if(this.appService.isMobileScreen()) {
      width = '90vw';
    }

    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      width: width,
      height: '90vh',
      data: {project: this.project}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

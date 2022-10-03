import {Component, Inject, Renderer2} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ProjectModel } from 'src/app/models/project.model';
import { AppService } from 'src/app/app.service';

export interface ProjectDialogData {
  project: ProjectModel;
}

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent {

  images: Array<string>;
  isMobileScreen: boolean;

  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectDialogData,
    public appService: AppService,
    private renderer: Renderer2,
  ) {
    this.images = data.project.images;
    this.isMobileScreen = this.appService.isMobileScreen();
    this.renderer.addClass(document.body.parentElement, 'no-scroll');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

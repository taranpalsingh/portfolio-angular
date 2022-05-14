import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ProjectModel } from 'src/app/models/project.model';

export interface CertificateDialogData {
  title: string;
  image: string;
}

@Component({
  selector: 'app-certificate-dialog',
  templateUrl: './certificate-dialog.component.html',
  styleUrls: ['./certificate-dialog.component.scss']
})
export class CertificateDialogComponent {

  certificate: CertificateDialogData;

  constructor(
    public dialogRef: MatDialogRef<CertificateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CertificateDialogData
  ) {
    this.certificate = data["certificate"];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

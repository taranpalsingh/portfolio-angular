import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { CertificateDialogComponent } from './certificate-dialog/certificate-dialog.component';
import { Constants } from './certifications.constants';
@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  certificates = [];
  isMobileScreen = false;
  
  constructor(
    public dialog: MatDialog,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.isMobileScreen = this.appService.isMobileScreen();
    let index = 0;
    for (const project of Constants.Certificates) {
      index++;
      setTimeout(() => {
        this.certificates.push(project);
      }, index*200);
    }
  }

  openDialog(certificate): void {
    if (this.isMobileScreen)
      return;
      
    const dialogRef = this.dialog.open(CertificateDialogComponent, {
      width: '800px',
      height: '500px',
      data: {certificate}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
}

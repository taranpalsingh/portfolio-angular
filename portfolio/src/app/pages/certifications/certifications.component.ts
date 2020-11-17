import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CertificateDialogComponent } from './certificate-dialog/certificate-dialog.component';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  certificates = [
    {
      title: 'MongoDB University: MongoDB Basics',
      image: '../../../assets/images/certificates/mongoDb.jpg'
    },
    {
      title: 'University of Michigan: Python Data Structures',
      image: '../../../assets/images/certificates/pythonDS.jpeg'
    },
    {
      title: 'University of Michigan: Applied Machine Learning in Python',
      image: '../../../assets/images/certificates/AMLPython.jpeg'
    },
    {
      title: 'deepLearning.ai: Introduction to TensorFlow',
      image: '../../../assets/images/certificates/tensorFlow.jpeg'
    }
  ]

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(certificate): void {
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

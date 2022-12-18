import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writings',
  templateUrl: './writings.component.html',
  styleUrls: ['./writings.component.scss']
})
export class WritingsComponent implements OnInit {

  writings = [];

  constructor() {
  }

  ngOnInit(): void {
    let index = 0;

    const allWritings = [
      {
        title: 'Research Paper published in IEEE Magazine',
        url: 'https://ieeexplore.ieee.org/document/9277277',
        image: '../../../assets/images/certificates/ensembleLearning.png'
      }
    ];

    this.writings = allWritings;
    // for (const writing of allWritings) {
    //   index++;
    //   setTimeout(() => {
    //     this.writings.push(writing);
    //   }, index*200);
    // }
  }

  navigateUrl(writing): void {
    window.open(writing.url, "_blank");
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Constants } from '../../pages/projects/projects.constants';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() images;
  constants = Constants;

  constructor(config: NgbCarouselConfig) {  
    config.interval = 2000;  
    config.wrap = true;
    config.keyboard = false;  
    config.pauseOnHover = false;
    config.showNavigationIndicators = false;
  }

  ngOnInit() {  
    // this.images = [...this.images, ...Constants.projects[0].images];
  }  
  
}

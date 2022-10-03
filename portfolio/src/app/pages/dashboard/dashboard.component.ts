import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isMobileScreen: boolean;

  constructor(
    public appService: AppService,
  ) { }

  ngOnInit(): void {
    this.isMobileScreen = this.appService.isMobileScreen();
  }

}

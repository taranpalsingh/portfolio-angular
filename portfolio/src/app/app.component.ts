import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  constructor() {
    document.documentElement.style.setProperty('--secondary-background-color','#333333');
    document.documentElement.style.setProperty('--background-color', '#2a2a2a'); 
    document.documentElement.style.setProperty('--highlight-color', '#04C2C9'); 
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  isMobileScreen() {
    return (window.innerWidth < 500);
  }
}

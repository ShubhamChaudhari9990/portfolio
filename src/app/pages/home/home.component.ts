import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {

  constructor(private router: Router){}
  name = 'Shubham Chaudhari';
  arrow = false;
  image1 = '../../assets/java.jpg'
  web = '../../assets/web.jpg'
  img2 = '../../assets/1.jpg'
  images = [this.img2, this.web, this.img2].map((n) => `${n}`);

  about() {
    this.router.navigate(['/about'])
  }
}

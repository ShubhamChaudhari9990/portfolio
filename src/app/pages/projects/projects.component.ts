import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  arrow = false;
  image1 = '../../assets/java.jpg'
  web = '../../assets/web.jpg'
  img2 = '../../assets/hostel.png'
  images = [this.img2, this.web, this.img2].map((n) => `${n}`);
}

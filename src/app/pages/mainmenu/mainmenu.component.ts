import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent {

  activeComponent = 'home';
  name = 'Shubham Chaudhari';

  constructor(private el: ElementRef){}

  activateComponent(sectionId: string): void {
    // this.activeComponent = component;
    const section = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

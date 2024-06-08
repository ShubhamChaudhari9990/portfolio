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

  openMail() {
    const email = 'shubhamchaudhari9990@gmail.com';
    const subject = 'Hello';
    const body = 'I would like to inquire about ...';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;  }

    openLinkedInProfile() {
      window.open('https://www.linkedin.com/in/shubham-chaudhari-0b89b3242/', '_blank');
    }

    openGithubProfile() {
      window.open('https://github.com/ShubhamChaudhari9990','_blank');
    }
}
